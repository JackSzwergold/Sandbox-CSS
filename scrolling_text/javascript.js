$(document).ready(function() {

  // Create a random array range.
  randomPositionRange = $.map(Array(10), function(value, index) {

    if (index > 0) {
      return index * 10;
    }

  })

  $( "article > div" ).each(function(index) {

    // Pick a random position.
    var randomPosition = Math.floor(Math.random() * randomPositionRange.length);
    var randomNumber = randomPositionRange.splice(randomPosition, 1);
    $(this).css('top', randomNumber + '%');

    // Pick a random duration.
    var minDuration = 8;
    var maxDuration = (20 - minDuration);
    var randomDuration = (Math.floor(Math.random() * maxDuration) + minDuration);
    console.log(randomDuration);
    $(this).css('animation-duration', randomDuration + 's');

  });


});
