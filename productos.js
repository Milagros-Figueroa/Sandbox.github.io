/* =====================================================================
   CONFIGURACIÓN
   ===================================================================== */

// Tu número de WhatsApp (código de país + 9 + número, sin + ni espacios)
const TELEFONO_WHATSAPP = "5491130157309";

// Este texto aparece en TODOS los productos
const AVISO_PLAZO = "Pedido personalizado: demora 15 días hábiles desde la confirmación de la impresión del modelo.";

// Texto que se agrega a TODOS los productos de una categoría.
// La palabra de la izquierda tiene que ser igual a la "categoria" del producto.
const TEXTO_POR_CATEGORIA = {
  "Vinilos": "Stickers de vinilo resistentes al agua, sol y roce.",
  // "Impresión 3D": "Material: PLA.",
};
const SUBCATEGORIAS = {
  "Vinilos": ["Holográficos", "Transparentes", "Blancos"],
};

/* =====================================================================
   PRODUCTOS
   Para agregar uno nuevo, copiá una línea, cambiá el id (que no se repita)
   y completá los datos.

   - descripcion: texto corto que se ve en la tarjeta (opcional)
   - detalle:     texto largo que se ve al abrir el producto (opcional)
   - imagen:      ruta de la foto, ej: "assets/productos/nombre.png"

   Las líneas que empiezan con // están desactivadas (no se muestran).
   ===================================================================== */
const productos = [
  {
    id: 1,
    nombre: "Combo x5 stickers Argentina",
    categoria: "Vinilos",
    subcategoria: "", //aun sin categoria
    precio: 7000,
    imagen: "",
    descripcion: "Pack mixto entre holograficos y vinilo blanco. Entre 6 y 8cm de largo",
    detalle: ""
  },
  {
    id: 2,
    nombre: "Llaveros Personalizados x50 unidades",
    categoria: "Impresión 3D",
    subcategoria: "", //aun sin subcategoria
    precio: 40000,
    imagen: "assets/llaveroPersonalizado2.jpeg",
    descripcion: "Incluyen el diseño + la argolla + la pieza en PLA.",
    detalle: ""
  },
  {
    id: 3,
    nombre: "Sticker Argentina",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/Argentina.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 4,
    nombre: "Soporte de celular 3D",
    categoria: "Impresión 3D",
    subcategoria: "", //aun sin subcategoria
    precio: 6400,
    imagen: "",
    descripcion: "Material: PLA.",
    detalle: ""
  },

   {
    id: 5,
    nombre: "Sticker Cazador de Bugs",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/bugHunter.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

   {
    id: 6,
    nombre: "Sticker Debi tirar mas mates",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/debiTirarMasMates.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

   {
    id: 7,
    nombre: "Sticker Mandala Solar",
    categoria: "Vinilos",
    subcategoria: "Holográficos",
    precio: 1500,
    imagen: "assets/mandalaSolar.png",
    descripcion: "Tamaño 8cm aprox.",
    detalle: ""
  },

     {
    id: 8,
    nombre: "Sticker Venus de Jalea",
    categoria: "Vinilos",
    subcategoria: "Holográficos",
    precio: 1500,
    imagen: "assets/venusDeJalea.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

     {
    id: 9,
    nombre: "Sticker Unos MatemÁticos",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/unosMatematicos.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

     {
    id: 10,
    nombre: "Sticker Pobreza Gaucha",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/pobrezaGaucha.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

     {
    id: 11,
    nombre: "Sticker poco Polvo",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/pocoPolvo.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

  {
    id: 12,
    nombre: "Sticker Debi tirar mas Fotos",
    categoria: "Vinilos",
    subcategoria: "Transparentes",
    precio: 1500,
    imagen: "assets/fotosBadBunny.png",
    descripcion: "Tamaño 5cm aprox.",
    detalle: ""
  },

  {
    id: 13,
    nombre: "Sticker Gato con Vinito",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/GatitoConVinito.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

  {
    id: 14,
    nombre: "Sticker de Discos",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/disk.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

    {
    id: 15,
    nombre: "Sticker de Dexter",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/dexter.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

    {
    id: 16,
    nombre: "Sticker gato gris",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/loli.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

    {
    id: 17,
    nombre: "Sticker Mary Jane",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/maryJane.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

    {
    id: 18,
    nombre: "Sticker Oso",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/pacienteOso.png",
    descripcion: "Tamaño 7cm aprox.",
    detalle: ""
  },

    {
    id: 19,
    nombre: "Sticker de Python",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/python.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

    {
    id: 20,
    nombre: "Sticker San ChatGPT",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/sanChatGPT.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

    {
    id: 21,
    nombre: "Sticker Carta la enfermera",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/theNurse.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

    {
    id: 22,
    nombre: "Sticker Alien de la Paz",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/alienVerde.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
    {
    id: 23,
    nombre: "Sticker Estampilla Argentina",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/etiquetaArg.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

    {
    id: 24,
    nombre: "Sticker Estrella Federal",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/EstrellaFederal.png",
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },

  //25


  /* PLANTILLA PARA NUEVOS PRODUCTOS
    {
    id: 6,                                  // Número único: el próximo libre (si el último es 5, usá 6). No repetir.
    nombre: "Nombre del producto",          // Título que se ve en la tarjeta y en la página del producto
    categoria: "Vinilos",                   // "Vinilos", "Impresión 3D" o una nueva (se crea el filtro sola)
    subcategoria: "",                       // una Subcategoria dentro de la categoria pra distinguir tipo de producto
    precio: 4500,                           // Solo el número, sin $ ni puntos
    imagen: "assets/nombre-de-la-foto.png", // Ruta de la foto. Si todavía no tenés, dejá "" y se ve un ícono
    descripcion: "",                        // Texto corto que se suma al de la categoría (opcional, puede quedar "")
    detalle: ""                             // Texto largo para la página del producto: medidas, materiales, colores (opcional)
  },
  */
];