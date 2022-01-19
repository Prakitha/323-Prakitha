const arithmetic=require('./04-arthmetic');
console.log(arithmetic.add(12,15));
console.log(arithmetic.multiply(12,15));
console.log(arithmetic.PI);
// using object destructuring

const{add,multiply,PI}=require('./04-arthmetic')
console.log(add(12,15));
console.log(multiply(12,15));
console.log(PI);
