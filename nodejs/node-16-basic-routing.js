const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("<h1>Home Page</h1>");
});

app.get("/about", function(request, response) {
    response.send("<h1>About Page</h1>");
});

app.get("/contact", function(request, response) {
    response.send("<h1>Contact Page</h1>");
});

app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});