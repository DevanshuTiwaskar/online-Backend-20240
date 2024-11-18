// callback


// A callback in JavaScript is a function passed as an argument to another function. The main purpose of a callback is to allow the second function to call the passed-in function at a specific time, often when an asynchronous operation is complete.


//example

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("John", sayGoodbye);
  // Output:
  // Hello, John
  // Goodbye!
  

//this example called """callback hell"""

function connectToServer(callback){
    console.log("connecting to server....")
    setTimeout(function(){
        console.log("connected to server.")
        cdfn()
    },2000)
}


function fetchcourses(callback){
    console.log("fetching courses...")
    setTimeout(()=>{
          callback(["Course 1","Course 2","Course 3"])
        
    },2000)}


    connectToServer(function(){
        fetchcourses(function(data){
           console.log(data)       
        })
    })