var id = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
var uniqe = [];
for (i = 0; i < id.length; i++) {
  var element = id[i];
  var index = uniqe.indexOf(element);
  if (index == -1) {
    uniqe.push(element);
  }
}
console.log(uniqe);
