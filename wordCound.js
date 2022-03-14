var spech = "I am Biplob Ghosh.I am a good boy ";
var count = 0;
for (var i = 0; i < spech.length; i++) {
  var char = spech[i];
  if (char == " ") {
    count++;
  }
}
count++;
console.log(count);
