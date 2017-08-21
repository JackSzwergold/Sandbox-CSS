$(document).ready(function() {

  // Assign the values of the searched for elements to a variable.
  var items = $("article > div");

  // Assign the values of the searched for elements to a variable.
  var randomRangeY = generateRangeY(items.length);

  /****************************************************************************/

  // A function to calculate a random position value.
  function generateRangeY(item_count) {

    // Set default values.
    var item_count = (typeof item_count !== 'undefined') ? item_count : 10;

    // We multiply the count by 3 to give the positioning range more values.
    item_count = item_count * 3;

    // Set an item value based on the count divided by 100%.
    var item_value = Math.round(100 / item_count);

    // Generate a random range.
    return $.map(Array(item_count), function(value, index) {
      if (index > 0) {
        return index * item_value;
      }
    });

  } // generateRangeY

  // A function to calculate a random position value.
  function randomPosition(item_count) {

    if (randomRangeY.length <= 3) {
      randomRangeY = generateRangeY(item_count);
    }

    // Pic a random value out of a random range.
    var randomRangeKeyY = Math.floor(Math.random() * randomRangeY.length);

    // Return a random range value.
    return randomRangeY.splice(randomRangeKeyY, 1)[0];

  } //randomPosition

  // A function to calculate a random duration value.
  function randomValue(min, max) {

    // Set default values.
    var min = (typeof min !== 'undefined') ? min : 3;
    var max = (typeof max !== 'undefined') ? max : 18;

    // Return the random values.
    return (Math.floor(Math.random() * (max - min)) + min);

  } // randomValue

  /****************************************************************************/

  // Set random values for each element.
  items.each(function() {

    // Assign the element to a variable.
    var element = $(this);

    // Set initial values to the animation.
    element.css({'top': randomPosition(items.length) + '%', 'animation-duration': randomValue() + 's', 'animation-delay': randomValue(0.125, 5) + 's'});

    // Detect when the animation ends and then restart it.
    element.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {

      // Set new values.
      var new_values = {'top': randomPosition(items.length) + '%', 'animation-duration': randomValue() + 's', 'animation-delay': randomValue(0.125, 5) + 's'}

      // Clone and replace the element to restart the WebKit animation.
      $(this).replaceWith($(this).clone(true).css(new_values));

    });

  });


});
