//loop

//1. for
//2. while
//3. do while
//4. for in
//5. for of
//6. forEach
//7. map
//8. filter
//9. reduce

//1. for loop

// for(starting;ending;change)

for (var i = 0; i < 10; i++) {
    console.log(i)
}

////------------------------------------------------------------------------------------------------------------------------------------

//2.while loop  

while(condition){
    //code
}   

////------------------------------------------------------------------------------------------------------------------------------------

//3. do while loop

do{
    //code
}while(condition)       


////------------------------------------------------------------------------------------------------------------------------------------

//4. for in loop

var object = {name:"devanshu", age: 21}


for(var value in object){
    console.log(value)// it will print the key of object 
 //it well give the output like this    
    //name 
    //age 
    console.log(object[value])// it will print the value of object + key 
    //it well give the output like this
    //devanshu
    //21

    console.log(value,object[value])// it will print the key and value of object
    //it well give the output like this
    //name devanshu
    //age 21
}

////------------------------------------------------------------------------------------------------------------------------------------


//6.forEach loop

var array = [1,2,3,4,5]

array.forEach(function(value,index){
    console.log(value,index)
})

//it well give the output like this
//1 0
//2 1
//3 2
//4 3
//5 4

////------------------------------------------------------------------------------------------------------------------------------------

//7.map loop

var array = [1,2,3,4,5]

var newArray = array.map(function(value,index){
    return value * 2
})

console.log(newArray)

//it well give the output like this
//[2,4,6,8,10]
