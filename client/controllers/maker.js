MakerController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
  	return {
      avatar: faker.internet.avatar(),
      name: faker.name.findName(),
      description: faker.lorem.sentences(10),
      imageOne: faker.image.cats(),
      imageTwo: faker.image.cats(),
      imageThree: faker.image.cats()
    }
  },

  action: function () {
    this.render();
  }
});
