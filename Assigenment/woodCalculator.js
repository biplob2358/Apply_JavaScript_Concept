function woodCalculator(c, t, b) {
  var chair = c * 1;
  var table = t * 3;
  var bed = b * 5;

  var element = chair + table + bed;
  return element;
}

var result = woodCalculator(1, 1, 1);
console.log(result);
