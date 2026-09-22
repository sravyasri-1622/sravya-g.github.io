// Client-Server Architecture

const http = require("http");

const server = http.createServer(function(request, response) {

    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.write("<h1>Client-Server Architecture</h1>");
    response.write("<p>Client sent a request to the server.</p>");
    response.write("<p>Server sent a response to the client.</p>");

    response.end();
});

server.listen(3000, function() {
    console.log("Server is running at http://localhost:3000");
});