const http = require("http");

const server = http.createServer(function(request, response) {

    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.write("<h1>My First Node.js HTTP Server</h1>");
    response.write("<p>Hello! This page is served using Node.js.</p>");

    response.end();
});

server.listen(3000, function() {
    console.log("HTTP Server started.");
    console.log("Open http://localhost:3000");
});