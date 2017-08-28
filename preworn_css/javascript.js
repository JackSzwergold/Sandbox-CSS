$(document).ready(function() {

  $('input').change(function(){
    $(this).delay(1800).queue(function() {
      // if ($(this).is(':checked')) {}
      // $(this).prop('checked', false).dequeue();
    });
  });

});
