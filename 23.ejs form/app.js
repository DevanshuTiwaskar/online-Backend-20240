const express = require('express');
const app = express();

app.set('view engine', 'ejs');


//this well decode the json data or data coming from axios example
app.use(express.json());

//this well support "all data of forms"(google forms, all the form are useing get and post method)
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});


//get method
app.get('/check', (req, res) => {
    console.log(req.query); //{ username: 'dev', password: 'dev' } //you well see the data in the url
     //req.query is an object that contains the query parameters of the request
    //get method is used to get the data from the url that is query string
   
    res.send('welcome');                                            
});

//post method
app.post('/check', (req, res) => {
    console.log(req.body); //{ username: 'dev', password: 'dev' } //in url the data is not visible
    //req.body is an object that contains the body of the request
    //post method is used to get the data from the body of the request body mea
    res.send('welcome');                                            
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
