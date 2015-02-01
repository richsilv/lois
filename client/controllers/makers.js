MakersController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
  	return {
  		name: Fake.user({fields: ['fullname']}).fullname,
  		bio: Fake.paragraph(6),
  		wares: [
  			{
  				name: 'Item 1'
  			},
  			{
  				name: 'Item 2'
  			}
  		]
  	}
  },

  action: function () {
    this.render();
  }
});
