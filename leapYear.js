function leapYear(year) {
  if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
}

const input = leapYear(2001);
if (input == true) {
  console.log("Thisn Year is LeapYear");
} else {
  console.log("This year is not LeapYear");
}
