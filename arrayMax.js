var marks = [40, 55, 21, 65, 99, 55, 77, 33, 56, 87];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
  var element = marks[i];
  if (element > marks) {
    max = element;
  }
}
console.log(max);
