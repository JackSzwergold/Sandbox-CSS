$(document).ready(function() {

  // Create a random array range.
  randomPositionRange = $.map(Array(20), function(value, index) {

    if (index > 0) {
      return index * 5;
    }

  });

  $( "article > div.animate" ).each(function(index) {

    var element = $(this);

    // Pick a random position from the preset range of values.
    var randomPosition = Math.floor(Math.random() * randomPositionRange.length);
    var randomNumber = randomPositionRange.splice(randomPosition, 1)[0];
    console.log(randomNumber);
    element.css('top', randomNumber + '%');

    // Pick a random duration value.
    var minDuration = 8;
    var maxDuration = 18;
    var randomDuration = (Math.floor(Math.random() * (maxDuration - minDuration)) + minDuration);
    // console.log(randomDuration);
    element.css('animation-duration', randomDuration + 's');

    // element.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
    //   element.replaceWith(element.clone(true));
    // });

  });

  // $( "article > div.animate" ).bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
  //   element.replaceWith(element.clone(true));
  // });

});
