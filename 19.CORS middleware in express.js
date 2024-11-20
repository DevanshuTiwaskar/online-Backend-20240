const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


// Now you create any routes that can be use or requested from another domain
app.get('/', function(req, res){});



///if you want to share only one route
app.get('/',cors(), function(req, res){});



