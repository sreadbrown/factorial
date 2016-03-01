function factorial(n) {
    return ((n*(n+1))/2)
}


$(document).ready(function(){
  $("#factorial form").submit(function(event) {
  var n = parseInt($("input#n").val());
  var result = factorial(n);
  $("#result").show(result);


 event.preventDefault();

});
});
