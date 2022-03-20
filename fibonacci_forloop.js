function fibonacci(n) {
  var fibo = [0, 1];
  for (i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

var input = fibonacci(5);
console.log(input);
console.log("BIPLOB");
