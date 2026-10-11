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
  "Vinilos": "Stickers de vinilo resistente al agua, sol y roce.",
  // "Impresión 3D": "Material: PLA.",
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
    precio: 7000,
    imagen: "",
    descripcion: "",
    detalle: ""
  },
  {
    id: 2,
    nombre: "Vinilo Personalizado x50 unidades",
    categoria: "Vinilos",
    precio: 30000,
    imagen: "assets/llaveroPersonalizado2.jpeg",
    descripcion: "",
    detalle: ""
  },
  {
    id: 4,
    nombre: "Sticker Argentina",
    categoria: "Vinilos",
    precio: 2500,
    imagen: "assets/Argentina.png",
    descripcion: "",
    detalle: ""
  },
  {
    id: 5,
    nombre: "Soporte de celular 3D",
    categoria: "Impresión 3D",
    precio: 6400,
    imagen: "",
    descripcion: "",
    detalle: ""
  },
  // {
  //   id: 6,
  //   nombre: "Nombre del producto",
  //   categoria: "Categoría",
  //   precio: 4500,
  //   imagen: "assets/productos/nombre-foto.jpg",
  //   descripcion: "Texto corto opcional",
  //   detalle: "Texto largo opcional: medidas, materiales, colores disponibles..."
  // },
];
