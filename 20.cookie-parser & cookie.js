/// cookie-parser

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get("/banned",function(req,res){
    res.cookie("banned", "true");  // Setting cookie or save the cookie which is save on browser
    res.cookie("name", "Devanshu"); //
    res.send("You have been banned");
})

///if we want to read the cookie we use cookieParser package
//npm i cookie-parser

app.get("/check",(req, res) =>{
    console.log(req.cookies.banned);// it well read the cookie and show in  terminal after creating a cookie
    console.log(req.cookies.name);
    res.send("checking")
})

app.listen(3000);