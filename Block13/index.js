function convertToCelsius(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

var fahrenheitTemp = 30; // For example, 68 degrees Fahrenheit
var celsiusTemp = convertToCelsius(fahrenheitTemp);

console.log(
  fahrenheitTemp +
    " degrees Fahrenheit is equal to " +
    celsiusTemp.toFixed(2) +
    " degrees Celsius"
);
function createMessage(fahrenheit, celsius) {
  var message = "The temperature ";
  message +=
    fahrenheit +
    " degrees Fahrenheit is equal to " +
    celsius.toFixed(2) +
    " degrees Celsius. ";

  if (fahrenheit < 32) {
    message += "It's very cold!";
  } else if (fahrenheit >= 32 && fahrenheit < 50) {
    message += "It's chilly.";
  } else if (fahrenheit >= 50 && fahrenheit < 70) {
    message += "It's mild.";
  } else if (fahrenheit >= 70 && fahrenheit < 90) {
    message += "It's warm.";
  } else {
    message += "It's hot!";
  }

  return message;
}

var message = createMessage(fahrenheitTemp, celsiusTemp);
console.log(message);

// Round up the number

var randomNumber = rand(celsiusTemp);
function rand(celsiusTemp) {
  return Math.ceil(celsiusTemp);
}
console.log("Random number between 0 and 99: " + randomNumber);