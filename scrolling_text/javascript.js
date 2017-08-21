$(document).ready(function() {

  /****************************************************************************/
  // Assign the values of the searched for elements to a variable.
  var items = $("article > div");

  /****************************************************************************/
  // Create an initial Y range.
  var randomRangeY = generateRangeY(items.length);

  /****************************************************************************/
  // Create an initial duration range.
  var randomRangeDuration = generateRangeDuration();

  /****************************************************************************/
  // Generate an array of Y position values.
  function generateRangeY(item_count) {

    // Set default values.
    var item_count = (typeof item_count !== 'undefined') ? item_count : 10;

    // We multiply the count by 3 to give the positioning range more values.
    item_count = item_count * 3;

    // Set an item value based on the count divided by 100%.
    var iteration_value = Math.round(100 / item_count);

    // Generate a random range.
    return $.map(Array(item_count), function(value, index) {
      if (index > 0) {
        return index * iteration_value;
      }
    });

  } // generateRangeY

  /****************************************************************************/
  // Generate an array of duration values.
  function generateRangeDuration() {

    return $.map(Array(70), function(value, index) {
      if (index > 0) {
        return index * 0.75;
      }
    });

  } // generateRangeDuration

  /****************************************************************************/
  // A function to calculate a random position value.
  function randomPositionValue(item_count) {

    if (randomRangeY.length <= 3) {
      randomRangeY = generateRangeY(item_count);
    }

    // Pic a random value out of a random range.
    var key = Math.floor(Math.random() * randomRangeY.length);

    // Return a random range value.
    return randomRangeY.splice(key, 1)[0];

  } // randomPositionValue

  /****************************************************************************/
  // A function to calculate a random position value.
  function randomDurationValue() {

    if (randomRangeDuration.length <= 3) {
      randomRangeDuration = generateRangeDuration();
    }

    // Pic a random value out of a random range.
    var key = Math.floor(Math.random() * randomRangeDuration.length);

    // Return a random range value.
    return randomRangeDuration.splice(key, 1)[0];

  } // randomDurationValue

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
    element.css({'top': randomPositionValue(items.length) + '%', 'animation-duration': randomDurationValue() + 's', 'animation-delay': randomValue(0.5, 3) + 's'});

    // Detect when the animation ends and then restart it.
    element.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {

      // Set new values.
      var new_values = {'top': randomPositionValue(items.length) + '%', 'animation-duration': randomDurationValue() + 's', 'animation-delay': randomValue(0.5, 3) + 's'}

      // Clone and replace the element to restart the WebKit animation.
      $(this).replaceWith($(this).clone(true).css(new_values));

    });

  });


});
