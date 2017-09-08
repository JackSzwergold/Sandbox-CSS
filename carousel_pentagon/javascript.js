$(document).ready(function() {

  // This de-selects a checked element after a predetermined period of time.
  function deselectElement(element_selector) {
    $(element_selector).change(function(){
      $(this).delay(1800).queue(function() {
        $(this).prop("checked", false).dequeue();
      });
    });
  }

  // This iterates through the list of inputs and checks each element.
  function iterateElements(element_selector) {
    var iteration = 900;
    var delay = iteration;
    $(element_selector).each(function(index) {
      var element = $(this);
      setTimeout( function(){
        $(element).prop("checked", true);
      }, delay);
      delay += iteration;
    }).promise().done(function() {
      setTimeout(function() {
        iterateElements(element_selector);
      }, delay += iteration);
    });
  }

  // Different ways to call the functions.
  // deselectElement('div.wrapper [id*="element_"]');
  iterateElements('div.wrapper input[id*="element_"]');
  // iterateElements('body input[id*="wrapper_"]');

});
