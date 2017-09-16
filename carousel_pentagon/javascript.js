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

  // Select the elements.
  // var elements = $('div.wrapper input[type=radio][id*="element_"]');
  var elements = $('div.wrapper div.container > div.element');

  // Set some variables.
  var count = 0;
  var element_index = 1;
  var limit = elements.length;
  // var limit = 7;

  // Init Hammer.
  var hammer_container = new Hammer($('div.wrapper div.container')[0]);

  // Set configuration options.
  // hammer_container.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

  // Main Hammer stuff.
  hammer_container.on('tap', function(event) {

    // Determine the the index value of the clicked element.
    var element_index = $(event.target).closest('div.element').index();
    // $(event.target).closest('div.element').css('backgroundColor', '#cfc');

    // if (event.type == 'swiperight') {
    if (true) {
      // Increment.
      count = (count + 1) % limit;
      count = count == 0 ? count += 1 : count;
    }
    else {
      // Decrement.
      count = (count + limit - 1) % limit;
      count = count == 0 ? count = (limit - 1) : count;
    }

    // Determine the control elemement for the clicked element.
    // var control_element = $('div.wrapper input[type=radio][id="element_' + count + '"]');
    var control_element = $('div.wrapper input[type=radio][id="element_' + Math.abs(element_index + 1) + '"]');

    // Toggle the 'checked' value of the control element.
    control_element.prop('checked', !$(control_element).attr('checked'));

    // Log stuff for debugging.
    console.log(event.type + ' | ' + element_index + ' | ' + count + ' | ' + limit);

  });

});
