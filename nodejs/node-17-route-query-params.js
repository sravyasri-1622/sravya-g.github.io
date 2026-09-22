const express = require("express");

const app = express();

app.get("/student/:name", function(request, response) {
    const name = request.params.name;

    response.send("<h1>Student Name: " + name + "</h1>");
});

app.get("/search", function(request, response) {
    const course = request.query.course;

    response.send("<h1>Course: " + course + "</h1>");
});

const server = app.listen(3001, function() {
    console.log("Server is running at http://localhost:3001");
});

server.on("error", function(error) {
    console.log("Server Error:", error);
});