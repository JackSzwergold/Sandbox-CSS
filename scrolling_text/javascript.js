$(document).ready(function() {

  // Create a random array range.
  randomRange = $.map(Array(10), function(value, index) {

    if (index > 0) {
      return index * 10;
    }

  })

  $( "article > div" ).each(function(index) {

    // Pick a random number. The 'randomRange' with splice allows non-duplicated random values.
    var randomPosition = Math.floor(Math.random() * randomRange.length);
    var randomNumber = randomRange.splice(randomPosition, 1);
    $(this).css('top', randomNumber + '%');

    // Method 1: Basic random number. Sloppy and introduces duplicates.
    var randomDuration = (Math.floor(Math.random() * 19) + 1);

    $(this).css('animation-duration', randomDuration + 's');

  });


});
