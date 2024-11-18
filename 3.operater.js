//operater

//1. Arithmetic operator(+,-,*,/,%)
//2. Assignment operator(=,+=,-=,*=,/=,%=)
//3. Comparison operator(==,===,!=,!==,>,>=,<,<=)
//4. Logical operator(&&,||,!)
//5. String operator(+)
//6. Conditional operator(if,else,switch,case)
//7. Type operator(typeof,instanceof)   


//1. Arithmetic operator

console.log(1 + 1) //2
console.log(1 - 1) //0
console.log(1 * 1) //1
console.log(1 / 1) //1
console.log(1 % 1) //0

//2. Assignment operator

//example
var a = 1
a += 1
console.log(a) //2

// += means a = a + 1

// -= means a = a - 1   

// *= means a = a * 1

// /= means a = a / 1

//3. Comparison operator

console.log(1 == 1) //true
console.log(1 === 1) //true
console.log(1 != 2) //true
console.log(1 !== 2) //true

//=== is strict comparison, it will check the value and type
//== is loose comparison, it will check the value only



//4. Logical operator

console.log(true && true) //true
console.log(true && false) //false
console.log(true || false) //true
console.log(!true) //false


//false value   
//0, "", null, undefined, NaN

//true value
//1, "a", true, [], {}

//example
console.log(1 && 2) //2
console.log(0 && 2) //0
console.log(1 || 2) //1
console.log(0 || 2) //2



