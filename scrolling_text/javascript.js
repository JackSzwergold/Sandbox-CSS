$(document).ready(function() {

  // Create a random array range.
  randomPositionRange = $.map(Array(20), function(value, index) {

    if (index > 0) {
      return index * 5;
    }

  })

  $( "article > div" ).each(function(index) {

    // Pick a random position from the preset range of values.
    var randomPosition = Math.floor(Math.random() * randomPositionRange.length);
    var randomNumber = randomPositionRange.splice(randomPosition, 1)[0];
    console.log(randomNumber);
    $(this).css('top', randomNumber + '%');

    // Pick a random duration value.
    var minDuration = 8;
    var maxDuration = 18;
    var randomDuration = (Math.floor(Math.random() * (maxDuration - minDuration)) + minDuration);
    // console.log(randomDuration);
    $(this).css('animation-duration', randomDuration + 's');

  });


});
