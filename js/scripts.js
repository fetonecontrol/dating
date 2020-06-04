$(document).ready(function() {
  $("#profile").submit(function(event) {
    const gender = $("#gender").val();
    const attribute = $("#attribute").val();


    $("#letter").show();

    $(".gender").text(gender);
    $(".attribute").text(attribute);

    event.preventDefault();

  });

  
});
