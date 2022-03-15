var frndName = [
  "Biplob",
  "Rabin",
  "Rajon",
  "Mizan",
  "Masum",
  "Gourov",
  "Rakib",
];

function tinyFriend(nameArray) {
  var shortest = nameArray[0];

  if (nameArray.length > 0) {
    for (var i = 0; i < nameArray.length; i++) {
      var element = nameArray[i];
      if (typeof element === "string" && element.length < shortest.length) {
        shortest = element;
      }
    }
    return shortest;
  } else {
    return "Please enter names in array";
  }
}
console.log(tinyFriend(frndName));
console.log(tinyFriend([]));
