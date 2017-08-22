$(document).ready(function() {

  /****************************************************************************/
  // Assign the values of the searched for elements to a variable.
  var items = $("article > div");

  /****************************************************************************/
  // Create an initial Y range.
  var rangeY = generateRangeY(100, items.length);

  /****************************************************************************/
  // Create an initial duration range.
  var rangeDuration = generateRangeTime(50, 0.75);

  /****************************************************************************/
  // Generate an array of Y position values.
  function generateRangeY(max, step) {

    // Set default values.
    var max = ((typeof max !== 'undefined') ? max : 100);
    var step = ((typeof step !== 'undefined') ? step : 10);

    // We multiply the step value by 3 to give the positioning range more values.
    step *= 3;

    // Set an item value based on the step value divided by 100%.
    var item_value = Math.round(max / step);

    // Generate a random range.
    return $.map(Array(step), function(value, index) {
      if (index > 0) {
        return index * item_value;
      }
    });

  } // generateRangeY

  /****************************************************************************/
  // Generate an array of duration values.
  function generateRangeTime(max, step) {

    // Set default values.
    var max = ((typeof max !== 'undefined') ? max : 70);
    var step = ((typeof step !== 'undefined') ? step : 0.75);

    return $.map(Array(max), function(value, index) {
      if (index > 0) {
        return index * step;
      }
    });

  } // generateRangeTime

  /****************************************************************************/
  // A function to calculate a random position value.
  function positionY(max, step) {

    // If the length of the Y range is less than or equal to 3, reset it.
    if (rangeY.length <= 3) {
      rangeY = generateRangeY(max, step);
    }

    // Return a random range value.
    return rangeY.splice(Math.floor(Math.random() * rangeY.length), 1)[0];

  } // positionY

  /****************************************************************************/
  // A function to calculate a random position value.
  function durationValue(max, step) {

    // If the length of the duration range is less than or equal to 3, reset it.
    if (rangeDuration.length <= 3) {
      rangeDuration = generateRangeTime(max, step);
    }

    // Return a random range value.
    return rangeDuration.splice(Math.floor(Math.random() * rangeDuration.length), 1)[0];

  } // durationValue

  /****************************************************************************/
  // A function to calculate a random duration value.
  function randomValue(min, max) {

    // Set default values.
    var min = (typeof min !== 'undefined') ? min : 3;
    var max = (typeof max !== 'undefined') ? max : 18;

    // Set the randome value.
    var ret = (Math.floor(Math.random() * (max - min)) + min);

    // Return the random values.
    return ret;

  } // randomValue

  /****************************************************************************/
  // Set random values for each element.
  items.each(function() {

    // Assign the element to a variable.
    var element = $(this);

    // Set initial values to the animation.
    element.css({'top': positionY(100, items.length) + '%', 'animation-duration': durationValue(75, 0.75) + 's', 'animation-delay': randomValue(0.25, 3) + 's'});

    // Detect when the animation ends and then restart it.
    element.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {

      // Set new values.
      var new_values = {'top': positionY(100, items.length) + '%', 'animation-duration': durationValue(75, 0.75) + 's', 'animation-delay': randomValue(0.25, 3) + 's'}

      // Clone and replace the element to restart the WebKit animation.
      $(this).replaceWith($(this).clone(true).css(new_values));

    });

  });


});
