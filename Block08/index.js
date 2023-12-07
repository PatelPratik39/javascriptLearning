let result = "";
function tempratureConverter(num, type) {
  if (type === "faranhite") {
    result = ((num - 32) * 5) / 9;
  } else if (type == "celcius") {
    result = num * (9 / 5) + 32;
  } else {
    console.log("Invalid Entry");
  }
}

console.log(" Temprature in Fernhite : " + result);
