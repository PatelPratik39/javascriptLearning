// console.log(!true);
// console.log(!(5 === "5"));
// console.log(!(3 < 5));
// console.log(5+3 || true);
// console.log(5 + 3 || false);
// console.log(true || 5 + 3);
// console.log(false || 5 + 3);
// console.log(false || 1+(-3));
// console.log(1-1 || true);

let value = 20;

if (value < 0) {
  console.log("value is negative");
} else if (value > 0) {
  console.log("value is positive");
} else if (value === 20) {
  console.log("value is assigned the number 20");
} else {
  console.log("value is assigned the number 0");
}

let friend = "sam";

if (friend === "Sam") {
  console.log("I picked up " + friend + " at the airport");
} else {
  console.log("I picked up someone at the airport");
}