/*****************************************************************************/
/* Makers: Event Handlers and Helpers */
/*****************************************************************************/
Template.Makers.helpers({
	makers: function () {
		return Array.apply(null, Array(12)).map(function() {
			return {
				avatar: faker.internet.avatar(),
				name: faker.name.findName()
			}
		});
	}
});