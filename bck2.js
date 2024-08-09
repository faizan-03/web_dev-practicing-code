const fs= require("fs");

// let text = fs.readFileSync("faizan.txt","utf-8");
// text = text.replace(" faizan","sufyan");
// console.log(text);
// fs.writeFileSync("ali.txt", text);
// let txt =fs.readFileSync("ali.txt", "utf-8");
// console.log(txt);


// create a server 

const http =require('http');

// blocking element 

let content = fs.readFileSync("form.html");

const server = http.createServer((req,res)=>{

res.writeHead( 200, {'content-type':'text/html'});

res.end(content);
});

server.listen(80,'127.0.0.1',()=>{

    console.log(" SERVER IS RUNNING ON PORT 80");

})


