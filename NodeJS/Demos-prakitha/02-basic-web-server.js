const http = require('http');
const { listenerCount } = require('process');
const server= http.createServer((req,res) =>{
    res.write("Hello, Node\n");
    res.write("Hello Prakitha\n");
    res.write("How are you\n");
    res.write("Bye\n");
    res.end();
});
// server is an event emitter.
// All event emitters will have a method called "on".
// Some vents of the HTTP server are "listerner,"request","error".

server.on("request",()=>{
    console.log("receiced a request");
})

server.on("listening",()=>{
    console.log("server is running http://localhost:3000/");
})

server.on("error",(err)=>{
    console.log(err.message);
})

server.listen(3000);