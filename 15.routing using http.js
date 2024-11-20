//routing using http module 

//routing = aap alag alag urls bana sakte ho and unpar kya hoga ye bhi tay kar skte ho


const http = require('http')

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.end("hey");
    }
    else if(req.url === '/profile'){
        res.end("profile page");
    }
    else{
        res.end("page not found")
    }
})

server.listen(3000)