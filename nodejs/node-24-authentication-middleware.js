const express = require("express");

const app = express();

function authentication(request, response, next) {

    const username = request.query.username;

    if (username === "admin") {
        next();
    } else {
        response.status(401).send("Authentication failed");
    }
}

app.get("/dashboard", authentication, function(request, response) {

    response.send("<h1>Welcome to Dashboard</h1>");

});

app.listen(3011, function() {

    console.log("Experiment 24 running at http://localhost:3011");

});