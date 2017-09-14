$(document).ready(function() {

  // This de-selects a checked element after a predetermined period of time.
  function deselectElement(element_selector, delay) {
    var delay = ((typeof delay !== 'undefined') ? delay : 1800);
    $(element_selector).change(function(){
      $(this).delay(delay).queue(function() {
        $(this).prop("checked", false).dequeue();
      });
    });
  }

  // This iterates through the list of inputs and checks each element.
  function iterateElements(element_selector, iteration) {
    var iteration = ((typeof iteration !== 'undefined') ? iteration : 900);
    var delay = iteration;
    $(element_selector).each(function(index) {
      var element = $(this);
      setTimeout( function(){
        $(element).prop('checked', !$(element).attr('checked'));
      }, delay);
      delay += iteration;
    }).promise().done(function() {
      setTimeout(function() {
        iterateElements(element_selector, iteration);
      }, delay -= iteration);
    });
  }

  // Different ways to call the functions.
  // deselectElement('div.wrapper [id*="element_"]', 600);
  // iterateElements('div.wrapper input[type=checkbox][id*="element_"]', 600);
  // iterateElements('div.wrapper input[type=radio][id*="element_"]', 600);
  // iterateElements('body input[type=checkbox][id*="wrapper_"]', 1800);

  //////////////////////////////////////////////////////////////////////////////
  // TODO: Touch tests.

  // Set some variables.
  // var elements_count = $('div.wrapper input[type=radio][id*="element_"]');
  var elements_count = $('div.wrapper div.container > div.element');
  var count = 0;
  // var limit = elements_count.length + 1;
  var limit = 5;

  var hammer_container = new Hammer($('div.container')[0]);
  hammer_container.on('tap', function(event) {

    // Increment.
    count = (count + 1) % limit;
    count = count == 0 ? count += 1 : count;

    // Decrement.
    // count = (count + limit - 1) % limit;
    // count = count == 0 ? count = (limit - 1) : count;

    var element = $('div.wrapper input[type=radio][id="element_' + count + '"]');
    $(element).prop('checked', !$(element).attr('checked'));
    console.log(elements_count.length + ' | ' + event.type + ' | ' + count + ' | ' + limit);
  });

  // var hammer_wrapper = new Hammer($('div.wrapper')[0]);
  // hammer_wrapper.on('tap', function(event) {
  //   var element = $('div.wrapper input[type=checkbox][id*="element_"]');
  //   $(element).prop('checked', !$(element).attr('checked'));
  //   // console.log(event.type);
  // });

  // var hammer_container = new Hammer($('div.container')[0]);
  // // var hammer_container = new Hammer($('div.element')[0]);
  // hammer_container.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

  // hammer_container.on('swipeleft', function(event) {
  //   var element_selector = 'div.wrapper input[type=radio][id="element_1"]';
  //   var element = $(element_selector);
  //   $(element).prop('checked', !$(element).attr('checked'));
  //   console.log(event.target.className + ' - ' + event.type);
  // });

  // hammer_container.on('swiperight', function(event) {
  //   var element_selector = 'div.wrapper input[type=radio][id="element_2"]';
  //   var element = $(element_selector);
  //   var elements_count = $('div.wrapper input[type=radio][id*="element_"]');
  //   console.log(elements_count.length);
  //   $(element).prop('checked', !$(element).attr('checked'));
  //   console.log(event.target.className + ' - ' + event.type);
  // });

});
