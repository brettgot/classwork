$(document).ready(function() {

  var age = parseInt(prompt("Please enter your age to continue."));

  if (age >= 18) {
    $('#vote').show();
  }
  else {
    $('#noVote').show();
  }

});
