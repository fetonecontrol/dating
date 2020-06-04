$(document).ready(function() {
  $("#profile").submit(function(event) {
    const gender = $("#gender").val();
    const attribute = $("#attribute").val();




    if (gender === 'male' && attribute === 'athletic') {
      let choice = "Arnold Schwartzenegger";
      $(".choice").text(choice);

    } else if  (gender === 'male' && attribute === 'caring') {
      let choice = "Brad Pitt";
      
    } else if (gender === 'male' && attribute === 'rich') {
      let choice = "Bill Gates";
      
    } else (gender === 'female' && attribute === 'intelligent') {
      let choice = "Madeleine Albright";
    } 

    
    event.preventDefault();

  });

  
});
