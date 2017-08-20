import Ember from 'ember';
import config from '../config/environment';

export default Ember.View.extend({

  init: function() {

    // Roll through the model data.
    Ember.$.each(this.get('controller.model').data.attributes, function(item_index, item_value) {
      // This method uses jQuery fade in/out animations.
      // Ember.$('div.Wrapper > div.Core > h1').fadeOut(400, 'swing', function() {
      //   Ember.$(this).html(item_value).fadeIn(2000, 'swing');
      // });

      // This method uses CSS3-based WebKit animations.
      var contentCore = Ember.$('div.Wrapper > div.Core');

      // Select the main H1 that does not have the '.off' class, copy the content and appent it to 'contentCore'.
      contentCore.find('h1:first:not(.off)').clone().removeClass().addClass('off fadeout').appendTo(contentCore);

      // Set the content here.
      contentCore.find('h1:first:not(.off) > span').html(item_value);

      // Find each H1 element that is fading out and fade it.
      Ember.$.each(contentCore.find('h1.off > span'), function (span_index, span_element) {
        Ember.$(span_element).addClass('fadetextcolor fadeoutblur');
      });

      // Find the H1 elements that have been faded out and remove it.
      if (contentCore.find('h1.fadeout').length >= config.APP.elementFadeOutMax) {
        contentCore.find('h1.fadeout:lt(' + config.APP.elementFadeOutRemove + ')').remove();
      }

    });

    return this._super();

  }.observes('controller.model')

});
