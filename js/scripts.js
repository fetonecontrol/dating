$(document).ready(function() {
  $("#profile").submit(function(event) {
    const gender = $("#gender").val();
    const attribute = $("#attribute").val();



    if (gender === 'male' && attribute === 'athletic') {
      let choice = "Arnold Schwartzenegger";
      $(".choice").text(choice);
    } else if (gender === 'female' && attribute === 'athletic') {
      let choice = "Arnold Schwartzenegger";
      $(".choice").text(choice);
    } else if (gender === 'male' && attribute === 'rich') {
      let choice = "Bill Gates";
      $(".choice").text(choice);
    } else if (gender === 'female' && attribute === 'itelligent') {
      let choice = "Madeleine Albright";
      $(".choice").text(choice);
    }

    $("#date").text();
    event.preventDefault();

  });
});
