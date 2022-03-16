function brickCalculator(noFloor) {
  if (noFloor < 1) {
    return "Please enter a valid floor number";
  } else if (noFloor >= 1 && noFloor <= 10) {
    return (
      "For " +
      noFloor +
      " floor building you need " +
      15 * 1000 * noFloor +
      " bricks"
    );
  } else if (noFloor >= 11 && noFloor <= 20) {
    return (
      "For " +
      noFloor +
      " floor building you need " +
      1000 * (12 * (noFloor - 10) + 15 * 10) +
      " bricks"
    );
  } else {
    return (
      "For " +
      noFloor +
      " floor building you need " +
      1000 * (10 * (noFloor - 20) + 12 * 10 + 15 * 10) +
      " bricks"
    );
  }
}
var result = brickCalculator(16);
console.log(result);
console.log("BIPLOB");
