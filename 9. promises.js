//promises

//promises in javascript is the object that represents the eventaul completion or failure of the asynchronous operation and allows to handle its results using ".then()"for success and ".catch()"for failure.


function connectToServer(){
    return new Promise((resolve, reject) => {
        console.log("Connecting to server....")
        setTimeout(function(){
            console.log("Connected to server.")
            resolve()
        },2000)
    })
}

connectToServer()
.then(function(response){
    console.log("green")
})