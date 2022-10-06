const http = require('http');

const fs = require('fs');
const fileContent=fs.readFileSync('index.html')
const server=http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/html'});
  res.end(fileContent)
})
server.listen(5000,'127.0.0.1',()=>{
  console.log("listeninig on port 5000")
  $env: PORT=5000
console.log(PORT) ;
var argv = require('optimist').argv;
console.log(argv.port);
})