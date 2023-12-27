const products = [
  {
    id: 1,
    title: "Espejo Decorativo Ovalado",
    price: 49.99,
    description: "Espejo ovalado con marco dorado, perfecto para dar un toque elegante a cualquier habitación.",
    category: "mirrors",
    stock: 20,
    image: "/assets/imagen1.jpg",
    discount: 0
  },
  {
    id: 2,
    title: "Macetas de Cerámica Modernas",
    price: 29.99,
    description: "Conjunto de tres macetas de cerámica en colores modernos, ideales para plantas pequeñas.",
    category: "plantaccessories",
    stock: 15,
    image: "/assets/imagen2.jpg",
    discount: 10
  },
  {
    id: 3,
    title: "Sofá Modular Gris",
    price: 599.99,
    description: "Sofá modular con tela gris y diseño contemporáneo para una sala de estar cómoda y elegante.",
    category: "furniture",
    stock: 5,
    image: "/assets/imagen3.jpg",
    discount: 15
  },
  {
    id: 4,
    title: "Jarrón de Cerámica Azul",
    price: 34.99,
    description: "Jarrón de cerámica en tono azul claro, perfecto para resaltar flores frescas o secas.",
    category: "homedecor",
    stock: 12,
    image: "/assets/imagen4.jpg",
    discount: 0
  },
  {
    id: 5,
    title: "Lámpara de Techo Industrial",
    price: 79.99,
    description: "Lámpara de techo con diseño industrial y acabado metálico, ideal para iluminar cualquier espacio con estilo.",
    category: "lighting",
    stock: 8,
    image: "/assets/imagen5.jpg",
    discount: 0
  },
  {
    id: 6,
    title: "Set de Utensilios de Cocina de Acero Inoxidable",
    price: 49.99,
    description: "Set completo de utensilios de cocina de acero inoxidable, duraderos y fáciles de limpiar.",
    category: "kitchenware",
    stock: 10,
    image: "/assets/imagen6.jpg",
    discount: 5
  },
  {
    id: 7,
    title: "Espejo de Pared con Marco de Madera",
    price: 59.99,
    description: "Espejo rectangular con marco de madera natural, perfecto para un ambiente rústico.",
    category: "mirrors",
    stock: 18,
    image: "/assets/imagen7.jpg",
    discount: 0
  },
  {
    id: 8,
    title: "Cojines Decorativos Geométricos",
    price: 19.99,
    description: "Set de dos cojines decorativos con patrones geométricos, ideales para dar un toque moderno al sofá.",
    category: "homedecor",
    stock: 25,
    image: "/assets/imagen8.jpg",
    discount: 10
  },
  {
    id: 9,
    title: "Mesa de Centro de Vidrio y Metal",
    price: 129.99,
    description: "Mesa de centro con superficie de vidrio y base metálica, elegante y funcional para la sala de estar.",
    category: "furniture",
    stock: 7,
    image: "/assets/imagen9.jpg",
    discount: 0
  },
  {
    id: 10,
    title: "Lámpara de Mesa Vintage",
    price: 39.99,
    description: "Lámpara de mesa con diseño vintage y pantalla de tela, perfecta para crear un ambiente acogedor.",
    category: "lighting",
    stock: 14,
    image: "/assets/imagen10.jpg",
    discount: 0
  },
  {
    id: 11,
    title: "Espejo de Pared con Diseño Floral",
    price: 69.99,
    description: "Espejo circular con diseño floral en relieve, ideal para añadir un toque romántico a cualquier habitación.",
    category: "mirrors",
    stock: 15,
    image: "/assets/imagen11.jpg",
    discount: 0
  },
  {
    id: 12,
    title: "Macetas de Cerámica Modernas",
    price: 45.99,
    description: "Conjunto de tres macetas tejidas a mano en tonos cálidos, perfectas para añadir calidez a tu sala de estar.",
    category: "homedecor",
    stock: 20,
    image: "/assets/imagen12.jpg",
    discount: 8
  },
  {
    id: 13,
    title: "Silla de Comedor Moderna",
    price: 89.99,
    description: "Silla de comedor con diseño moderno y asiento acolchado para mayor comodidad durante las comidas.",
    category: "furniture",
    stock: 10,
    image: "/assets/imagen13.jpg",
    discount: 12
  },
  {
    id: 14,
    title: "Portavelas de Cristal Tallado",
    price: 24.99,
    description: "Portavelas de cristal tallado con patrón geométrico, perfecto para crear ambientes íntimos y acogedores.",
    category: "homedecor",
    stock: 18,
    image: "/assets/imagen14.jpg",
    discount: 0
  },
  {
    id: 15,
    title: "Lámpara de Pie con Trípode",
    price: 129.99,
    description: "Lámpara de pie con trípode de madera y pantalla de tela, ideal para iluminar rincones especiales.",
    category: "lighting",
    stock: 8,
    image: "/assets/imagen15.jpg",
    discount: 0
  },
  {
    id: 16,
    title: "Juego de Tazas de Cerámica",
    price: 19.99,
    description: "Juego de tazas de cerámica con patrones artísticos, perfecto para disfrutar de tu bebida favorita.",
    category: "kitchenware",
    stock: 25,
    image: "/assets/imagen16.jpg",
    discount: 5
  },
  {
    id: 17,
    title: "Cuadro Decorativo de Paisaje",
    price: 59.99,
    description: "Cuadro decorativo con impresión de paisaje natural, ideal para dar vida a tus paredes.",
    category: "homedecor",
    stock: 12,
    image: "/assets/imagen17.jpg",
    discount: 0
  },
  {
    id: 18,
    title: "Mesa Auxiliar de Mármol",
    price: 149.99,
    description: "Mesa auxiliar con superficie de mármol y base metálica, elegante y funcional para cualquier espacio.",
    category: "furniture",
    stock: 7,
    image: "/assets/imagen18.jpg",
    discount: 0
  },
  {
    id: 19,
    title: "Aplique de Pared Vintage",
    price: 34.99,
    description: "Aplique de pared con diseño vintage y acabado en bronce, perfecto para iluminar pasillos o rincones.",
    category: "lighting",
    stock: 14,
    image: "/assets/imagen19.jpg",
    discount: 0
  },
  {
    id: 20,
    title: "Candelabro de Metal",
    price: 54.99,
    description: "Candelabro de metal con brazos decorativos, ideal para crear un ambiente elegante en cenas especiales.",
    category: "homedecor",
    stock: 15,
    image: "/assets/imagen20.jpg",
    discount: 0
  },
  {
    id: 21,
    title: "Espejo de Pared con Marco de Bambú",
    price: 79.99,
    description: "Espejo rectangular con marco de bambú natural, perfecto para un ambiente fresco y relajado.",
    category: "mirrors",
    stock: 12,
    image: "/assets/imagen21.jpg",
    discount: 0
  },
  {
    id: 22,
    title: "Cojines de Exterior Impermeables",
    price: 39.99,
    description: "Set de cojines de exterior con tejido impermeable, ideales para muebles de patio o terraza.",
    category: "homedecor",
    stock: 20,
    image: "/assets/imagen22.jpg",
    discount: 0
  },
  {
    id: 23,
    title: "Sillón Reclinable con Reposapiés",
    price: 249.99,
    description: "Sillón reclinable con reposapiés, tapizado en tela suave para una experiencia de descanso completa.",
    category: "furniture",
    stock: 8,
    image: "/assets/imagen23.jpg",
    discount: 10
  },
  {
    id: 24,
    title: "Reloj de Pared Vintage",
    price: 29.99,
    description: "Reloj de pared con diseño vintage y números romanos, perfecto para dar un toque retro a tu hogar.",
    category: "homedecor",
    stock: 15,
    image: "/assets/imagen24.jpg",
    discount: 0
  },
  {
    id: 25,
    title: "Lámpara de Techo con Pantalla de Mimbre",
    price: 89.99,
    description: "Lámpara de techo con pantalla de mimbre, ideal para crear una iluminación cálida y acogedora.",
    category: "lighting",
    stock: 10,
    image: "/assets/imagen25.jpg",
    discount: 0
  },
  {
    id: 26,
    title: "Set de Cuchillos de Cocina de Acero Inoxidable",
    price: 59.99,
    description: "Set completo de cuchillos de cocina de acero inoxidable con mango ergonómico.",
    category: "kitchenware",
    stock: 18,
    image: "/assets/imagen26.jpg",
    discount: 15
  },
  {
    id: 27,
    title: "Tapiz de Pared Bohemio",
    price: 49.99,
    description: "Tapiz de pared con diseño bohemio y colores vibrantes, perfecto para añadir carácter a cualquier habitación.",
    category: "homedecor",
    stock: 14,
    image: "/assets/imagen27.jpg",
    discount: 0
  },
  {
    id: 28,
    title: "Mesa de Comedor de Madera Maciza",
    price: 349.99,
    description: "Mesa de comedor rectangular de madera maciza, robusta y elegante para cenas familiares.",
    category: "furniture",
    stock: 6,
    image: "/assets/imagen28.jpg",
    discount: 0
  },
  {
    id: 29,
    title: "Aplique de Pared Moderno",
    price: 39.99,
    description: "Aplique de pared con diseño moderno y ajustable, perfecto para iluminar de manera focalizada.",
    category: "lighting",
    stock: 16,
    image: "/assets/imagen29.jpg",
    discount: 0
  },
  {
    id: 30,
    title: "Centro de Mesa de Cristal",
    price: 69.99,
    description: "Centro de mesa de cristal con detalles grabados, ideal para resaltar la decoración de tu mesa.",
    category: "homedecor",
    stock: 10,
    image: "/assets/imagen30.jpg",
    discount: 0
  }
]

const productsUpperCase = products.map(product => ({
  ...product,
  title: product.title.toUpperCase()
}));

  export default productsUpperCase 