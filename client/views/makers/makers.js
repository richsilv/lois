/*****************************************************************************/
/* Makers: Event Handlers and Helpers */
/*****************************************************************************/
var colours = [
      'blue',
      'yellow',
      'lightgrey',
      'midgrey'
    ],
    products = [
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/Bread.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/Fresh.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/Selection_of_garden_birds_teatowel.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/blue-green+ring3.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/cire+clutch.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/il+pleut+silver1.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/jug.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/navy-yellow+ring2.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/peaks+studs.jpg',
      },
      {
        name: Fake.word() + ' - ' + Fake.color(),
        price: Math.floor(Math.random() * 3000) / 100,
        image: 'images/products/saturn+studs.jpg'
      },
    ];

Template.Makers.helpers({
  products: function() {
    return products;
  }
});

/*****************************************************************************/
/* Makers: Lifecycle Hooks */
/*****************************************************************************/
Template.Makers.created = function () {
};

Template.Makers.rendered = function () {
};

Template.Makers.destroyed = function () {
};
