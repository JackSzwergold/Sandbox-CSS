$(document).ready(function() {

  // A function to calculate a random position value.
  function randomPosition() {

    // Generate a random range.
    randomRange = $.map(Array(11), function(value, index) {
      if (index > 0) {
        return index * 8;
      }
    });

    // Pic a random value out of a random range.
    var randomRangeKey = Math.floor(Math.random() * randomRange.length);
    return randomRange.splice(randomRangeKey, 1)[0];

  } //randomPosition

  // A function to calculate a random duration value.
  function randomValue(min, max) {

    // Set default values.
    min = (typeof min !== 'undefined') ? min : 3;
    max = (typeof max !== 'undefined') ? max : 18;

    // Return the random values.
    return (Math.floor(Math.random() * (max - min)) + min);

  } // randomValue

  // Set random values for each element.
  $("article > div").each(function(index) {
    $(this).css({'top': randomPosition() + '%', 'animation-duration': randomValue() + 's', 'animation-delay': randomValue(0.125,5) + 's'});
  });

  // Detect when the animation ends and then restart it.
  $("article > div").bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
    var element = $(this);
    var new_values = {'top': randomPosition() + '%', 'animation-duration': randomValue() + 's', 'animation-delay': randomValue(0.125,5) + 's'}
    element.replaceWith(element.clone(true).css(new_values));
  });

});
