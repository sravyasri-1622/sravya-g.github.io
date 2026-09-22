const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true
}));

app.get("/", function(request, response) {

    request.session.username = "Sravya";

    response.send("<h1>Session Created</h1>");

});

app.get("/session", function(request, response) {

    const username = request.session.username;

    if (username) {
        response.send("<h1>Session Username: " + username + "</h1>");
    } else {
        response.send("<h1>No Session Found</h1>");
    }

});

app.listen(3016, function() {

    console.log("Experiment 29 running at http://localhost:3016");

});