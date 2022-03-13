function fact(n) {
  var factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
var input = fact(6);
console.log(input);
