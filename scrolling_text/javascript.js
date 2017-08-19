$(document).ready(function() {

  randomRange = $.map(Array(20), function(value, index) {
    if (index > 0) {
      return index * 5;
    }
  });

  function randomPosition() {
    var randomRangeKey = Math.floor(Math.random() * randomRange.length);
    return randomRange.splice(randomRangeKey, 1)[0];
  }

  function randomDuration() {
    var minDuration = 8;
    var maxDuration = 18;
    return (Math.floor(Math.random() * (maxDuration - minDuration)) + minDuration);
  }

  $("article > div.animate").each(function(index) {
    var element = $(this);
    element.css('top', randomPosition() + '%');
    element.css('animation-duration', randomDuration() + 's');
    // element.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
    //   element.replaceWith(element.clone(true));
    // });
  });

});
