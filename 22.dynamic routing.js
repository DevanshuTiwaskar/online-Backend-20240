const express  = require('express');
const app  = express();

app.get('/about',(req,res)=>{
    res.send("Welcome to home page")
})


app.get("/:name",(req,res)=>{   
    res.send(`Welcome to ${req.params.name} page`)//when you go on "/devanshu" it will show Welcome to devanshu page
})

app.listen(3000);
