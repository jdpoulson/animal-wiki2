$(document).ready(function() {

  $(".turtles").click(function() {
  $("#turtles").toggle();
  $("#snakes").hide();
  $("#insects").hide();
  });

  $(".snakes").click(function() {
  $("#snakes").toggle();
  $("#insects").hide();
  $("#turtles").hide();
  });

  $(".insects").click(function() {
  $("#insects").toggle();
  $("#turtles").hide();
  $("#snakes").hide();
  });
});
