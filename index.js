var changeColor = function(){
  var $color = $('#background option:selected').text();
  $('#collumn1').css("background-color", $color);
}

var changeColor2 = function(){
  var $color = $('#background2 option:selected').text();
  $('#collumn2').css("background-color", $color);
}

var changeColor3 = function(){
  var $color = $('#background3 option:selected').text();
  $('#collumn3').css("background-color", $color);
}
