const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("<h1>Welcome to Express.js</h1>");
});

app.listen(3000, function() {
    console.log("Express server running at http://localhost:3000");
});