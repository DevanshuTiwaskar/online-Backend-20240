//error handling is a process of handling errors in a program

const express = require('express');
const app = express();

app.fet('/', (req, res) => {
    res.send("hello world");     
    ///you make mistake while write a code here you write you want write app.get but you write app.fet
    ///this type of error show in terminal your app is crash
});

app.get('/', (req, res) => {
    res.send(hey);  ////hey is not define this type of error are refferance
});

app.listen(3000);
