'use strict'
let hasDriversLicense = false;
const passTest = true

if (passTest) hasDriverLicense = true
if (hasDriversLicense) console.log("I can drive");

// const interface = 'Vivek';              // strict mode will not allow us to create variable with reserved keyword
// const private = 'my private variable';
// const if = 45;
// --------------------------------------------------------------
function logger() {
     console.log('My name is Vivek');
}

logger();
logger();
logger();

function makeJuice(fruit1, fruit2) {
     return `Making Juice from ${fruit1} fruit1 and ${fruit2} fruit2. Enjoy.!`;
}

const Juice1 = makeJuice(10, 20);
const Juice2 = makeJuice(100, 120);
const Juice3 = makeJuice(1000, 110);
console.log(Juice1, Juice2, Juice3);