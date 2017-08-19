$(document).ready(function() {

  // A function to calculate a random position value.
  function randomPosition() {

    // Generate a random range.
    randomRange = $.map(Array(20), function(value, index) {
      if (index > 0) {
        return index * 5;
      }
    });

    // Pic a random value out of a random range.
    var randomRangeKey = Math.floor(Math.random() * randomRange.length);
    return randomRange.splice(randomRangeKey, 1)[0];

  } //randomPosition

  // A function to calculate a random duration value.
  function randomDuration() {

    var min = 8;
    var max = 18;

    return (Math.floor(Math.random() * (max - min)) + min);

  } // randomDuration

  // Set random values for each element.
  $("article > div.animate").each(function(index) {
    var element = $(this);
    element.css('top', randomPosition() + '%');
    element.css('animation-duration', randomDuration() + 's');
  });

  // Detect when the animation ends and then restart it.
  $("article > div.animate").bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
    var element = $(this);
    element.replaceWith(element.clone(true));
  });

});
