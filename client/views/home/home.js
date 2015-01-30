var images = [
		'Brendan.jpg',
		'Jonna inks.jpg',
		'Laurie hands.jpg',
		'Ruth.jpg'
	]

Template.Home.created = function() {
	this.imageNum = new ReactiveVar(0);

}

Template.Home.helpers({
	image: function () {
		var instance = Template.instance();
		return images[instance.imageNum.get()];
	}
});

Template.Home.events({
	'click [data-action="change-image"]': function(evt, tmp) {
		var max = images.length,
			newInd = (tmp.imageNum.get() + 1) % max;
		tmp.imageNum.set(newInd);
	}
})