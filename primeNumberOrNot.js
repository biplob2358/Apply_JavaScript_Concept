function check(n) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return "Not Prime Number";
    }
  }
  return "Prime Number";
}

var input = check(71);
console.log(input);
