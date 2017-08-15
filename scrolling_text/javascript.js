$(document).ready(function() {

  // Create a random array range.
  randomPositionRange = $.map(Array(10), function(value, index) {

    if (index > 0) {
      return index * 10;
    }

  })

  $( "article > div" ).each(function(index) {

    // Pick a random number. The 'randomPositionRange' with splice allows non-duplicated random values.
    var randomPosition = Math.floor(Math.random() * randomPositionRange.length);
    var randomNumber = randomPositionRange.splice(randomPosition, 1);
    $(this).css('top', randomNumber + '%');

    // Method 1: Basic random number. Sloppy and introduces duplicates.
    var randomDuration = (Math.floor(Math.random() * 19) + 1);

    $(this).css('animation-duration', randomDuration + 's');

  });


});
