//Variable

//1. var
//2. let
//3. const

// //var is global variable, let and const is block variable

var a = 1

// //if we use var, we can change the value of a
a = 2

console.log(a)

// //if we use let or const, we can't change the value of b
let b = 1
b = 2

console.log(b)

// //b=2
// //const is constant variable, we can't change the value of a
const c = 1
c = 2

console.log(c)

var a = { name:"a" ,age:20}
b = a

b.name = "b"

//we get a = {name:"b",age:20}
//and b = {name:"b",age:20}
//because b is reference of a, so when we change b, a also change


//if we want to copy a value, we can use spread operator
b = {...a}
b.name = "b"
//then get b = {name:"b",age:20}
//a = {name:"a",age:20}
//this is copy value, so when we change b, a is not change
