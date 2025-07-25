new Vue({
  el: '#app',
  data: {
    productos: [
      {
        id: 1,
        nombre: 'Zapatillas deportivas',
        precio: '$49.99',
        imagen: 'https://images-cdn.ubuy.hn/648e853569a3882430156fc6-zapatos-de-hombre-zapatillas-deportivas.jpg',
      },
      {
        id: 2,
        nombre: 'Zapatos de vestir',
        precio: '$59.99',
        imagen: 'https://images-cdn.ubuy.hn/647f17cb5a55c1183754dea0-zapatos-de-vestir-de-hombre-moda-zapato.jpg',
      },
      {
        id: 3,
        nombre: 'Sandalias cómodas',
        precio: '$29.99',
        imagen: 'https://m.media-amazon.com/images/I/81CHYqaW0zL._UF1000,1000_QL80_.jpg',
      },
    ],
  },
});
