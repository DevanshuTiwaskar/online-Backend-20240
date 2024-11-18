//Data type

//1. Number(1,2,3,4,5,6,7,8,9,10)
//2. String("Hello","World")
//3. Boolean(true,false)
//4. Null
//5. Undefined
//6. Object


//type of data type

//primitive data type              
//1. Number
//2. String
//3. Boolean
//4. Null
//5. Undefined

//reference data type
//1. Object{}
//2. Array[]
//3. Function()

var a = [1,2,3]
var b = a

//then get b = [1,2,3] this is reference value

b.pop()

//then get a = [1,2]
//because b is reference of a, so when we change b, a also change

//if we want to copy a value, we can use spread operator
var c = [...a]

//then get c = [1,2] this is copy value
    
