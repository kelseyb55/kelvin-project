// the constant kelvin (temperature) will not change.
const kelvin = 0;

// convert kelvin to celsius
var celsius = kelvin - 273;

// convert celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;

// round down to the whole number
fahrenheit = Math.floor(celsius * (9/5) + 32);

var TEMPERATURE = fahrenheit
console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit.`);

// convert celsius to newton
var newton = celsius * (33/100);

// round down to the whole number
newton = Math.floor(celsius * (33/100));


var TEMPERATURE = newton;
console.log(`The temperature is ${TEMPERATURE} degrees newton`);
