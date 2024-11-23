//morgon middleware

// npm i morgan


const express = require('express');
const app = express();
const morgan = require('morgan')



app.use(morgan("dev"));

///:method :url :status :response-time ms - :res[content-length]
// :'GET'    :'/'  :'200'   :1.522 ms - -        --------------//output in terminal


app.get('/', (req, res, next) => {
           res.send("Welcome to")
})

app.listen(3000);