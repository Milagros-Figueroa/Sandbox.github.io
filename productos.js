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

// Subcategorías de cada categoría (los botones que aparecen al elegir esa categoría).
// El orden de la lista es el orden de los botones.
// Cada texto tiene que ser igual al "subcategoria" del producto.
const SUBCATEGORIAS = {
  "Vinilos": ["Holográficos", "Transparentes", "Blancos"],
};
// Fotos del carrusel de ferias. "texto" es opcional (puede quedar "").
const FOTOS_FERIAS = [
  { imagen: "assets/ferias/feria1.jpg", texto: " " },
  { imagen: "assets/ferias/feria2.jpg", texto: " " },
  { imagen: "assets/ferias/feria3.jpg", texto: " " },
  { imagen: "assets/ferias/feria4.jpg", texto: " " },
  { imagen: "assets/ferias/feria5.jpg", texto: " " },
  { imagen: "assets/ferias/feria6.jpg",  texto:" " },
  { imagen: "assets/ferias/feria7.jpg", texto: " " },
  { imagen: "assets/ferias/feria8.jpg", texto: " " },
  { imagen: "assets/ferias/feria9.jpg", texto: " " },
  { imagen: "assets/ferias/feria10.jpg", texto: "" },
  { imagen: "assets/ferias/feria11.jpg", texto: "" },
  { imagen: "assets/ferias/feria12.jpg", texto: "" }
];

/* =====================================================================
   PRODUCTOS
   Para agregar uno nuevo, copiá la plantilla del final, cambiá el id
   (que no se repita) y completá los datos.

   - subcategoria: una de la lista SUBCATEGORIAS de arriba (opcional).
                   Si la dejás "", el producto aparece solo en "Todos".
   - descripcion:  texto corto que se ve en la tarjeta (opcional)
   - detalle:      texto largo que se ve al abrir el producto (opcional)
   - imagen:       foto principal, ej: "assets/nombre.png"
   - imagenes:     fotos extra (opcional), ej: ["assets/foto2.png", "assets/foto3.png"]

   Las líneas que empiezan con // están desactivadas (no se muestran).
   ===================================================================== */
const productos = [
  {
    id: 1,
    nombre: "Combo x5 stickers Argentina",
    categoria: "Vinilos",
    subcategoria: "",
    precio: 7000,
    imagen: "",
    imagenes: [],
    descripcion: "Pack mixto entre holograficos y vinilo blanco. Entre 6 y 8cm de largo",
    detalle: ""
  },
  {
    id: 2,
    nombre: "Llaveros Personalizados x50 unidades",
    categoria: "Impresión 3D",
    subcategoria: "",
    precio: 40000,
    imagen: "assets/llaveroPersonalizado2.jpeg",
    imagenes: [],
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
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 4,
    nombre: "Soporte de celular 3D",
    categoria: "Impresión 3D",
    subcategoria: "",
    precio: 3500,
    imagen: "assets/phoneHolder.png",
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 9,
    nombre: "Sticker Unos Matemáticos",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/unosMatematicos.png",
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
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
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 25,
    nombre: "Sticker Gato Lunar",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/gatitolunar.png",
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 26,
    nombre: "Sticker Abrochadora en Gelatina",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/AbrochadoraEnGelatina.png",
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 27,
    nombre: "Sticker Bandera Palestina",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/banderaPalestina.png",
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 28,
    nombre: "Sticker Pokemon Cubone",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/cubone.png",
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 29,
    nombre: "Sticker Gato Rosa",
    categoria: "Vinilos",
    subcategoria: "Holográficos",
    precio: 1500,
    imagen: "assets/gatoPeladoRosa.png",
    imagenes: [],
    descripcion: "Tamaño 8cm aprox.",
    detalle: ""
  },
  {
    id: 30,
    nombre: "Cubo Infinito",
    categoria: "Impresión 3D",
    subcategoria: "",
    precio: 3000,
    imagen: "assets/cuboInfinito.jpg",
    imagenes: ["assets/cuboInfinito1.jpg","assets/cuboInfinito2.jpg"],
    descripcion: "",
    detalle: ""
  },
  {
    id: 31,
    nombre: "Sticker Itachi",
    categoria: "Vinilos",
    subcategoria: "Holográficos",
    precio: 1500,
    imagen: "assets/itachi.png",
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 32,
    nombre: "Sticker Michael Myers",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/MichaelMayers.png",
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 33,
    nombre: "Sticker Termo con mate",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/termoConMate.png",
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 34,
    nombre: "Sticker Bob Esponja con Pesas",
    categoria: "Vinilos",
    subcategoria: "Blancos",
    precio: 1000,
    imagen: "assets/bobPesas.png",
    imagenes: [],
    descripcion: "Tamaño 6cm aprox.",
    detalle: ""
  },
  {
    id: 35,
    nombre: "Llavero Larva Hollow Knight",
    categoria: "Impresión 3D",
    subcategoria: "",
    precio: 2000,
    imagen: "assets/larva.png",
    imagenes: [],
    descripcion: "",
    detalle: ""
  },
  {
    id: 36,
    nombre: "Ruleta juego",
    categoria: "Impresión 3D",
    subcategoria: "",
    precio: 6000,
    imagen: "assets/ruleta1.jpg",
    imagenes: ["assets/ruleta2.jpg", "assets/ruleta3.jpg"],
    descripcion: "",
    detalle: ""
  },

  {
    id: 37,
    nombre: "Llavero Axolotl",
    categoria: "Impresión 3D",
    subcategoria: "",
    precio: 6000,
    imagen: "assets/axolotl.png",
    imagenes: ["assets/axolotl2.png"],
    descripcion: "",
    detalle: ""
  },

  /* DESACTIVADO: era un duplicado de "Sticker Gato Lunar" (id 25).
  
  */

  /* PLANTILLA PARA NUEVOS PRODUCTOS (copiala arriba de esta línea, sin los símbolos de comentario)
  {
    id: 37,                                 // Número único: el próximo libre. No repetir.
    nombre: "Nombre del producto",          // Título que se ve en la tarjeta y en la página del producto
    categoria: "Vinilos",                   // "Vinilos", "Impresión 3D" o una nueva (se crea el filtro sola)
    subcategoria: "",                       // Holográficos, Transparentes o Blancos (solo para Vinilos)
    precio: 4500,                           // Solo el número, sin $ ni puntos
    imagen: "assets/nombre-de-la-foto.png", // Foto principal. Si todavía no tenés, dejá "" y se ve un ícono
    imagenes: [],                           // Fotos extra (opcional): ["assets/foto2.png", "assets/foto3.png"]
    descripcion: "",                        // Texto corto que se suma al de la categoría (opcional)
    detalle: ""                             // Texto largo para la página del producto (opcional)
  },
  */
];