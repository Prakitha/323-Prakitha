const http = require('http');
const url =require('url');
// server is an event emitter.
// All event emitters will have a method called "on".
// Some events of the HTTP server are "listerner,"request","error".

const server= http.createServer((req,res) =>{

 
    //console.log(req.url);
    const urlParts=url.parse(req.url,true);
    console.log(urlParts);
    const word =urlParts.pathname.substring( 1 );
    let formattedWord;
    if(urlParts.query.format === 'upper'){
        formattedWord=word.toUpperCase();
    } else if(urlParts.query.format==='lower'){
        formattedWord=word.toLowerCase();
    }else{
        formattedWord=word;
    }
    res.write(formattedWord +'chrome');
    // to get the formatted date
    let date=(new Date()).toDateString();
    res.write(date);
    res.end();
})

server.on("listening",()=>{
    console.log("server is running http://localhost:3000/");
})

server.on("error",(err)=>{
    console.log(err.message);
})

server.listen(3000);