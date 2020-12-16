// current forecast in kelvin.
const kelvin = 0;
const celsius = kelvin - 273;
//converting kelvin to celsius.
let fahrenheit = celsius * (9/5) + 32;
// round down forenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature ${fahrenheit} degrees fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);






// if run, the code block will log to the console: The temperature -460 degrees fahrenheit.
The temperature is -91 degrees newton.