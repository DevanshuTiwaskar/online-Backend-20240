const express = require('express');
const app = express();

app.get('/', (req, res) => {
   ///try catch is a error handling method to handle error individually
    try {
    res.send(hey);///hey is not define this type of error are refferance
   }catch(err){
    next(err);   ///next is a function to pass the error to the next middleware that is (error handling)
   }
});


app.get('/', (req, res) => {
    res.send("hello world");
});

///error handling  
//////this for all error how express handle error
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});


app.listen(3000);

