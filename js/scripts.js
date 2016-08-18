// front
$(document).ready(function () {
  $("button").click(function (event) {
    var word = $("#word").val();
    var output = Encryption(word);
    $("#output").text(output);
    $("#sw").slideToggle();
    event.preventDefault()
  });
});


// back
var Encryption = function(word) {
  var str = word.toLowerCase();
  var len = Math.floor(Math.sqrt(str.length));
  var output = '';
  for (var j = 0; j < len; j++) {
    for (var i = j; i < str.length; i += len) {
      output +=(str.charAt(i));
    }
  }

  return output;
}
