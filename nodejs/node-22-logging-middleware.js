const express = require("express");

const app = express();

function logger(request, response, next) {

    console.log(
        "Method: " + request.method +
        " | URL: " + request.url
    );

    next();
}

app.use(logger);

app.get("/", function(request, response) {
    response.send("<h1>Home Page</h1>");
});

app.get("/about", function(request, response) {
    response.send("<h1>About Page</h1>");
});

app.listen(3006, function() {
    console.log("Server running at http://localhost:3006");
});