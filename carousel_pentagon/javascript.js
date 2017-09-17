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
    $(element_selector).each(function(selected_index) {
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

  //////////////////////////////////////////////////////////////////////////////
  // TODO: Touch tests.
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // This calculates a new index value.
  function newIndexValue(index_value, limit, increment) {
    var index_value = ((typeof index_value !== 'undefined') ? index_value : 1);
    var limit = ((typeof limit !== 'undefined') ? limit : 4);
    var increment = ((typeof increment !== 'undefined') ? increment : true);
    if (increment) {
      index_value = (index_value + 1) % limit;
      index_value = index_value == 0 ? index_value += 1 : index_value;
    }
    else {
      index_value = (index_value + limit - 1) % limit;
      index_value = index_value == 0 ? index_value = (limit - 1) : index_value;
    }
    return index_value;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Set some variables.
  var selected_index = 0;
  var element_index = 1;
  // var limit = $('div.wrapper input[type=radio][id*="element_"]').length;
  var limit = $('div.wrapper div.container > div.element').length + 1;

  // Core Hammer stuff.
  var hammer_instance = new Hammer($('div.wrapper div.container')[0]);
  hammer_instance.get('tap').set({ taps: 1, interval: 300, time: 180, threshold: 2, posThreshold: 10 });
  hammer_instance.on('tap', function(event) {

    // Determine the clicked element.
    var element = $(event.target).closest('div.element');

    // Determine the horizontal clicked_side.
    var clicked_side = event.center.x >= (element.offset().left + element.width()/2) ? true : false;

    // Determine the index value of the clicked element.
    var element_index = $(event.target).closest('div.element').index();

    // Ideas on how to shift the whole thing around.
    // selected_index = Math.abs(element_index + 1);
    selected_index = newIndexValue(selected_index, limit, clicked_side);

    // Determine the control elemement for the clicked element.
    var control_element = $('div.wrapper input[type=radio][id="element_' + selected_index + '"]');

    // Toggle the 'checked' value of the control element.
    control_element.prop('checked', !$(control_element).attr('checked'));

    // Log stuff for debugging.
    console.log(event.type + ' | clicked_side: ' + (clicked_side == true ? 'right' : 'left') + ' | element_index: ' + element_index + ' | selected_index: ' + selected_index + ' | limit: ' + limit);

  });

  // Different ways to call the functions.
  // deselectElement('div.wrapper [id*="element_"]', 600);
  // iterateElements('div.wrapper input[type=checkbox][id*="element_"]', 600);
  // iterateElements('div.wrapper input[type=radio][id*="element_"]', 600);
  // iterateElements('body input[type=checkbox][id*="wrapper_"]', 1800);

});
