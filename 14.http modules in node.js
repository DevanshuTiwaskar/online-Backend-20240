const http = require('http');

var server = http.createServer(function(req, res){
    res.end("chal raha hai")
})

server.listen(3000);



//modules are the package of node.js which are install in node
//from npm we download package