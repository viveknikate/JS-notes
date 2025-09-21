
// not allowed access before initialization
// console.log(calcAge4('sdfwe', 25));       // not allowed when its declared with const or let
const calcAge4 = (name, birthYear) => {
     return `My name is ${name}, & my age is ${2025 - birthYear}`;
}

console.log(calcAge4('Vivek', 2000))         // My name is Vivek, & my age is 25
console.log(calcAge4('Mahesh', 1975))        // My name is Mahesh, & my age is 50


// if its var & just calling the name then it gives undefined as result
console.log(calling);              // UNDEFINED
var calling = 'Vivek';
console.log(calling);              // Vivek

// or in-case of function
console.log(calling2);                  // UNDEFINED
// console.log(calling2('werwe', 89));                  // this will throw error we can't call function before initialization
var calling2 = (name, birthYear) => {
     return `FROM VAR CALLING:My name is ${name}, & my age is ${2025 - birthYear}`;
}
console.log(calling2('Vivek', 2000));                                                // FROM VAR CALLING:My name is Vivek, & my age is 25
