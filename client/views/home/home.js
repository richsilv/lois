Template.Home.created = function() {
	window.scrollTo(0, 0);
};

Template.Home.rendered = function() {
	var controller = new ScrollMagic(),
		vw = $(window).width() / 100,
		vh = $(window).height() / 100,
		vmax = Math.max(vw, vh),
		topSectionFactor = (vh > vw && vw <= 3.2) ? 35 : 30,
        tl = new TimelineLite({
            paused: true,
            onComplete: function() {
                $('body').removeClass('no-scroll');
            }
        });

    tl.add( TweenLite.to('.top-spacer', 2, {height: topSectionFactor * vmax}) );
    tl.add( TweenLite.to('.lois-blurb', 1, {opacity: 1}) );
    tl.add( TweenMax.to('.down-arrow .icon-arrow-down', 0.5, {opacity: 1, repeat: 3, yoyo: true}), '-=0.5' );

    new ScrollScene({offset: 0, duration: 400})
        .setTween(TweenLite.to('.lois-blurb', 1, {opacity: 0}) )
        .addTo(controller);
    new ScrollScene({offset: 200, duration: 800})
        .setTween(TweenLite.to('.top-spacer', 2, {height: 5.6975 * vmax}) )
        .addTo(controller);
    new ScrollScene({offset: 200, duration: 800})
        .setTween(TweenLite.to('.top-menu .centered-button', 2, {height: 10.5 * vmax, width: 10.5 * vmax}) )
        .addTo(controller);
    new ScrollScene({offset: 200, duration: 800})
        .setTween(TweenLite.to('.top-menu .centered-button .button-text', 2, {'font-size': 2.3 * vmax}) )
        .addTo(controller);

    new ScrollScene({offset: 200, duration: 800})
    	.setTween(TweenLite.to('.top-menu', 1, {height: 5.3 * vmax}))
    	.addTo(controller);
    new ScrollScene({offset: 200, duration: 800})
    	.setTween(TweenLite.to('.top-menu .centered-button', 1, {top: 2.65 * vmax}))
    	.addTo(controller);

    new ScrollScene({offset: 1000, duration: 600})
    	.setTween(TweenLite.to('.top-menu .menu-items .item', 1, {x: 0}))
    	.addTo(controller);
    new ScrollScene({offset: 1200, duration: 400})
    	.setTween(TweenLite.to('.top-menu .menu-items', 1, {opacity: 1}))
    	.addTo(controller);
    new ScrollScene({offset: 1200, duration: 400})
        .setTween(TweenLite.to('.lois-blurb', 1, {height: 0}))
        .addTo(controller);

    new ScrollScene({offset: 2200})
        .setPin('.top-section')
        .addTo(controller);
    new ScrollScene({duration: 2200})
		.setPin('.splash-scene')
		.addTo(controller);
  
	Meteor.setTimeout(function() {
        controller.scrollTo(0);
        $('body').addClass('no-scroll');
        tl.delay(1).play();
    }, 500);
};
