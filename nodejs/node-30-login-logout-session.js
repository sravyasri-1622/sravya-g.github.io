const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false
}));

app.get("/login", function(request, response) {

    request.session.username = "Sravya";

    response.send("<h1>Login Successful</h1><p>Welcome, Sravya!</p>");

});

app.get("/profile", function(request, response) {

    if (request.session.username) {
        response.send("<h1>Welcome " + request.session.username + "</h1>");
    } else {
        response.send("<h1>Please Login First</h1>");
    }

});

app.get("/logout", function(request, response) {

    request.session.destroy(function() {
        response.send("<h1>Logout Successful</h1>");
    });

});

app.listen(3017, function() {

    console.log("Experiment 30 running at http://localhost:3017");

});