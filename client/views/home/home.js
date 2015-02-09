Template.Home.created = function() {
	window.scrollTo(0, 0);
};

Template.Home.rendered = function() {
	var controller = new ScrollMagic(),
		vw = $(window).width() / 100,
		vh = $(window).height() / 100,
		vmax = Math.max(vw, vh),
		topSectionFactor = (vh > vw && vw <= 3.2) ? 35 : 30;

	new ScrollScene({duration: 500})
        .setTween(TweenLite.to('.top-spacer', 1, {height: topSectionFactor * vmax})) // pins the element for a scroll distance of 100px
        .addTo(controller); // add scene to controller

	new ScrollScene({duration: 200, offset: 400})
        .setTween(TweenLite.to('.lois-blurb', 1, {opacity: 1})) // pins the element for a scroll distance of 100px
        .addTo(controller); // add scene to controller

    new ScrollScene({offset: 500, duration: 200})
    	.setTween(TweenLite.to('.top-menu', 1, {height: 5.3 * vmax}))
    	.addTo(controller);
    new ScrollScene({offset: 500, duration: 200})
    	.setTween(TweenLite.to('.top-menu .centered-button', 1, {top: 2.65 * vmax}))
    	.addTo(controller);

    new ScrollScene({offset: 700, duration: 300})
    	.setTween(TweenLite.to('.top-menu .menu-items .item', 1, {x: 0}))
    	.addTo(controller);
    new ScrollScene({offset: 800, duration: 200})
    	.setTween(TweenLite.to('.top-menu .menu-items', 1, {opacity: 1}))
    	.addTo(controller);

    new ScrollScene({duration: 1200})
		.setPin('.splash-scene')
		.addTo(controller);

	Meteor.setTimeout(controller.scrollTo.bind(this, 0), 500);
};
