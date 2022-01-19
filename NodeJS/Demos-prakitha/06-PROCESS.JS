console.log(process.env);

console.log(process.env.PORT);

console.log(process.env.NODE_ENV);

console.clear();
console.log(process.argv);

console.log('number 1=',process.argv[2]);
console.log('number 2=',process.argv[3]);
//console.log(number1+number2);
// using parse int
const num1=parseInt(process.argv[2]);
const num2=parseInt(process.argv[3]);

console.log(num1+num2);
process