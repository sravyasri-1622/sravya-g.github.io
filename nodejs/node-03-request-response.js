const http = require("http");

const server = http.createServer(function(request, response) {

    console.log("1. Request received from client.");

    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    console.log("2. Server is preparing response.");

    response.write("<h1>Request-Response Cycle</h1>");
    response.write("<p>Request received successfully.</p>");
    response.write("<p>Response sent successfully.</p>");

    response.end();

    console.log("3. Response sent to client.");
});

server.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});