const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("<h1>Home Page</h1>");
});

app.get("/about", function(request, response) {
    response.send("<h1>About Page</h1>");
});

// 404 route
app.use(function(request, response) {
    response.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3003, function() {
    console.log("Server is running at http://localhost:3003");
});