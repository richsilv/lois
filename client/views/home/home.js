var images = [
		'Brendan.jpg',
		'Jonna inks.jpg',
		'Laurie hands.jpg',
		'Ruth.jpg'
	],
	colours = [
		'blue',
		'yellow'
	]

Template.Home.created = function() {
	this.imageNum = new ReactiveVar(0);
	this.colourNum = new ReactiveVar(0);
	this.icons = new ReactiveVar(false);
}

Template.Home.helpers({
	image: function () {
		var instance = Template.instance();
		return images[instance.imageNum.get()];
	},
	colour: function () {
		var instance = Template.instance();
		return colours[instance.colourNum.get()];
	},
	icons: function () {
		var instance = Template.instance();
		return instance.icons.get();
	}
});

Template.Home.events({
	'click [data-action="change-image"]': function(evt, tmp) {
		var max = images.length,
			newInd = (tmp.imageNum.get() + 1) % max;
		tmp.imageNum.set(newInd);
	},
	'click [data-action="change-colour"]': function(evt, tmp) {
		var max = colours.length,
			newInd = (tmp.colourNum.get() + 1) % max;
		tmp.colourNum.set(newInd);
	},
	'click [data-action="change-icons"]': function(evt, tmp) {
		tmp.icons.set(!tmp.icons.get());
	}
})