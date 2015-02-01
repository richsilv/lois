/*****************************************************************************/
/* Makers: Event Handlers and Helpers */
/*****************************************************************************/
var colours = [
      'blue',
      'yellow',
      'lightgrey',
      'midgrey'
    ];

Template.Makers.events({
  'click [data-action="change-colour"]': function(evt, tmp) {
    var max = colours.length,
      newInd = (tmp.colourNum.get() + 1) % max;
    tmp.colourNum.set(newInd);
  },
});

Template.Makers.helpers({
  backgroundColour: function () {
    var instance = Template.instance();
    return colours[instance.colourNum.get()];
  },
  nonBackgroundColour: function () {
    var instance = Template.instance();
    return colours[(instance.colourNum.get() + 1) % 2];
  }
});

/*****************************************************************************/
/* Makers: Lifecycle Hooks */
/*****************************************************************************/
Template.Makers.created = function () {
  this.colourNum = new ReactiveVar(0);
};

Template.Makers.rendered = function () {
};

Template.Makers.destroyed = function () {
};
