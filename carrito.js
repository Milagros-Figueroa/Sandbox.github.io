/* =====================================================================
   FUNCIONES COMPARTIDAS POR TODAS LAS PÁGINAS
   Necesita que productos.js esté cargado antes.
   ===================================================================== */

const CLAVE_CARRITO = "sandbox_carrito";
let carrito = [];   // lista de { id, cantidad }

/* ---------- auxiliares ---------- */

// Convierte un número en precio argentino, ej: 7000 -> $7.000
function formatearPrecio(numero){
  return new Intl.NumberFormat('es-AR', { style:'currency', currency:'ARS', maximumFractionDigits:0 }).format(numero);
}

function buscarProducto(id){
  return productos.find(p => p.id === id);
}

function textoDelProducto(producto){
  return [TEXTO_POR_CATEGORIA[producto.categoria], producto.descripcion].filter(Boolean).join(' ');
}

function armarDescripcion(producto){
  return [textoDelProducto(producto), AVISO_PLAZO].filter(Boolean).join(' ');
}



// Ícono según la categoría (se usa cuando no hay foto)
function iconoPara(categoria){
  const c = categoria.toLowerCase();
  if (c.includes('3d')) {
    return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/></svg>`;
  }
  if (c.includes('combo')) {
    return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="18" height="14" rx="1"/><path d="M3 11h18M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
  }
  return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 9l6 6M6 15l6-6M20 6l-9 9M20 18l-9-9"/></svg>`;
}

// El ícono queda de fondo y la foto va encima.
// Si la foto no carga, se saca y se ve el ícono (en vez de una imagen rota).
function armarMiniatura(producto){
  const foto = producto.imagen
    ? `<img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.remove()">`
    : '';
  return iconoPara(producto.categoria) + foto;
}

/* ---------- guardar y leer el carrito (para que no se pierda al cambiar de página) ---------- */

function leerCarrito(){
  try {
    const guardado = localStorage.getItem(CLAVE_CARRITO);
    carrito = guardado ? JSON.parse(guardado) : [];
  } catch (error) {
    carrito = [];
  }
  // Descarta productos que ya no existen en la lista
  carrito = carrito.filter(ci => buscarProducto(ci.id));
}

function guardarCarrito(){
  try {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
  } catch (error) {
    // Si el navegador no permite guardar, el carrito funciona igual en esta página
  }
}

/* ---------- acciones del carrito ---------- */

function agregarAlCarrito(id){
  const enCarrito = carrito.find(ci => ci.id === id);
  if (enCarrito) enCarrito.cantidad++;
  else carrito.push({ id, cantidad: 1 });
  guardarCarrito();
  dibujarCarrito();
}

function cambiarCantidad(id, cambio){
  const enCarrito = carrito.find(ci => ci.id === id);
  if (!enCarrito) return;
  enCarrito.cantidad += cambio;
  if (enCarrito.cantidad <= 0) quitarDelCarrito(id);
  else { guardarCarrito(); dibujarCarrito(); }
}

function quitarDelCarrito(id){
  carrito = carrito.filter(ci => ci.id !== id);
  guardarCarrito();
  dibujarCarrito();
}

function abrirCarrito(){
  document.getElementById('fondoOscuro').classList.add('abierto');
  document.getElementById('panelCarrito').classList.add('abierto');
}

function cerrarCarrito(){
  document.getElementById('fondoOscuro').classList.remove('abierto');
  document.getElementById('panelCarrito').classList.remove('abierto');
}

// Arma el mensaje con el pedido y abre WhatsApp
function finalizarPedido(){
  if (!carrito.length) return;
  const items = carrito.map(ci => ({ ...buscarProducto(ci.id), cantidad: ci.cantidad }));
  const lineas = items.map(i => `• ${i.cantidad}x ${i.nombre} — ${formatearPrecio(i.precio * i.cantidad)}`).join('\n');
  const total = items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
  const mensaje = `Hola! Quiero encargar:\n${lineas}\n\nTotal: ${formatearPrecio(total)}`;
  window.open(`https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

/* ---------- dibujar el carrito ---------- */

function dibujarCarrito(){
  const items = carrito.map(ci => ({ ...buscarProducto(ci.id), cantidad: ci.cantidad }));
  const totalUnidades = items.reduce((suma, i) => suma + i.cantidad, 0);
  document.getElementById('contadorCarrito').textContent = totalUnidades;

  const caja = document.getElementById('carritoItems');
  if (!items.length){
    caja.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.<br>Agregá algo del catálogo.</p>`;
  } else {
    caja.innerHTML = items.map(i => `
      <div class="item">
        <div class="item-miniatura">${armarMiniatura(i)}</div>
        <div class="item-info">
          <div class="item-nombre">${i.nombre}</div>
          <div class="item-categoria">${i.categoria}</div>
          <div class="item-controles">
            <button class="btn-cantidad" data-restar="${i.id}">−</button>
            <span class="cantidad">${i.cantidad}</span>
            <button class="btn-cantidad" data-sumar="${i.id}">+</button>
            <span class="item-precio">${formatearPrecio(i.precio * i.cantidad)}</span>
          </div>
          <button class="btn-quitar" data-quitar="${i.id}">Quitar</button>
        </div>
      </div>
    `).join('');
  }

  const total = items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
  document.getElementById('totalCarrito').textContent = formatearPrecio(total);
}

/* ---------- armar el panel del carrito en la página ---------- */

function crearPanelCarrito(){
  document.body.insertAdjacentHTML('beforeend', `
    <div class="fondo-oscuro" id="fondoOscuro"></div>
    <aside class="panel-carrito" id="panelCarrito" aria-label="Carrito de compras">
      <div class="carrito-cabecera">
        <h3>Tu carrito</h3>
        <button class="btn-cerrar" id="botonCerrar" aria-label="Cerrar carrito">×</button>
      </div>
      <div class="carrito-items" id="carritoItems"></div>
      <div class="carrito-pie">
        <div class="fila-total"><span>Total</span><span class="valor" id="totalCarrito">$0</span></div>
        <button class="btn btn-finalizar" id="botonFinalizar">Finalizar por WhatsApp</button>
      </div>
    </aside>
  `);
}

// Se llama una sola vez al cargar cada página
function iniciarCarrito(){
  crearPanelCarrito();
  leerCarrito();

  document.getElementById('botonCarrito').addEventListener('click', abrirCarrito);
  document.getElementById('botonCerrar').addEventListener('click', cerrarCarrito);
  document.getElementById('fondoOscuro').addEventListener('click', cerrarCarrito);
  document.getElementById('botonFinalizar').addEventListener('click', finalizarPedido);

  document.getElementById('carritoItems').addEventListener('click', e => {
    const sumar = e.target.closest('[data-sumar]');
    const restar = e.target.closest('[data-restar]');
    const quitar = e.target.closest('[data-quitar]');
    if (sumar) cambiarCantidad(Number(sumar.dataset.sumar), 1);
    if (restar) cambiarCantidad(Number(restar.dataset.restar), -1);
    if (quitar) quitarDelCarrito(Number(quitar.dataset.quitar));
  });

  dibujarCarrito();
}
