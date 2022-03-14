var a = 9;
var b = 6;
var c = 1;

if (a > b) {
  if (a > c) {
    console.log("A is bigger");
  } else {
    console.log("C is bigger");
  }
} else {
  if (b > c) {
    console.log("B is bigger");
  } else {
    console.log("C is bigger");
  }
}

// Another Way
var x = 5;
var y = 7;
var z = 3;
var max = Math.max(x, y, z);
console.log(max);
