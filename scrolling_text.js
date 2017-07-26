$(document).ready(function() {

  // Create a random array range.
  randomRange = $.map(Array(10), function(value, index) {

    if (index > 0) {
      return index * 10;
    }

  })

  $( "article > div" ).each(function(index) {

    // Method 1: Basic random number. Sloppy and introduces duplicates.
    // var randomNumber = (Math.floor(Math.random() * 9) + 1) * 10;
    // Method 2: Now pick a random number. The 'randomRange' with splice allows non-duplicated random values.
    var randomPosition = Math.floor(Math.random() * randomRange.length);
    var randomNumber = randomRange.splice(randomPosition, 1);

    $(this).css('top', randomNumber + '%');

  });


});
