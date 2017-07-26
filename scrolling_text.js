$(document).ready(function() {

  var widthBody = document.body.clientWidth
  var widthHeight = document.body.clientHeight;

  var randomNumber = Math.floor(Math.random() * 90) + 10;

  alert ('top: ' + randomNumber + '% : ' + widthBody + ' x ' + widthHeight);

});
