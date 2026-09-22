const express = require("express");

const app = express();

function myMiddleware(request, response, next) {
    console.log("Custom middleware executed.");
    next();
}

app.use(myMiddleware);

app.get("/", function(request, response) {
    response.send("<h1>Custom Middleware Example</h1>");
});

app.listen(3005, function() {
    console.log("Server running at http://localhost:3005");
});