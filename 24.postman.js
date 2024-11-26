//postman is a tool to test api

//postman supports common HTTP methods like GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS for testing api,
//but it does not support the connect method ,which is typically used to establish a network connection over an HTTP proxy(web socket communication).


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello world");  //output in postman is "hello world"
});

app.post('/', (req, res) => {
    res.send("hello world");   //output in postman is "hello world"
});

app.put('/', (req, res) => {
    res.send("hello world");   //output in postman is "hello world"
});

app.patch('/', (req, res) => {
    res.send("hello world");
});


//head method
//head method is used to get the metadata of the response
app.head("/", (req, res) => {
    res.send("hello world");   //output we don't get date
});

// app.options /// we get this output = GET,HEAD,POST,PUT,PATCH
//options method is used to get the allowed methods of the response
app.options("/", (req, res) => {
    res.send("hello world");
});



var data =[1,2,3,4,5];
app.post("/data/:number", (req, res) => {
    data.push(parseInt(req.params.number));//parseInt is used to convert the string to number
    res.send(data);
});
///output is when you go to postman and put /data/2 then it will be[1,2,3,4,5,2] 
//if you put /data/6 then it will be [1,2,3,4,5,6]

app.listen(3000);
