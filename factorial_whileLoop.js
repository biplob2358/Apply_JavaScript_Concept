function fact(num) {
  var i = 1;
  var factorial = 1;
  while (i <= num) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}

var input = fact(5);
console.log(input);
