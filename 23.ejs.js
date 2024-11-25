const express = require('express');
const app = express();


//install ejs
//npm i ejs

app.set('view engine','ejs');//set the view engine to ejs

app.get('/',(req,res)=>{
    res.render('index');
})  

app.listen(3000);