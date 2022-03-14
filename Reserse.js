function reserve(str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    res = char + res;
  }
  return res;
}

var spech = "Hello good morning Bangladesh";
var re = reserve(spech);
console.log(re);
