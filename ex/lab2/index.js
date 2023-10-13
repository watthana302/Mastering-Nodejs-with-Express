const fs = require('fs');
const os = require('os');
const x = require('./data')


console.log(x.data);

// Create server
const http = require('http');
http
  .createServer(function(req, res){
    res.writeHead(200);
    res.write('Hello!! ')
    
    res.write(os.uptime().toString());
    res.end();
  })
  .listen(3000);

console.log('Listening on port 3000');
