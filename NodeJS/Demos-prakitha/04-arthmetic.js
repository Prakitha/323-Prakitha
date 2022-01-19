// this is public
const add=(x,y)=>x+y;
// this is private 
const subtract=(x,y)=>add(x,-y);
// making this private
const multiply=(x,y)=>x*y;
// making this public
const divide=(x,y)=>x/y;
const PI=3.14;

module.exports={
    add,
    multiply,
    PI,
}