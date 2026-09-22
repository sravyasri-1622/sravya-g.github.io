const express = require("express");

const app = express();

function validateRequest(request, response, next) {
    const name = request.query.name;

    if (!name) {
        response.status(400).send("Name is required");
        return;
    }

    next();
}

app.get("/student", validateRequest, function(request, response) {
    response.send("Student name: " + request.query.name);
});

app.listen(3010, function() {
    console.log("Experiment 23 running at http://localhost:3010");
});