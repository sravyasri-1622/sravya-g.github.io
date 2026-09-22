const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false
}));

const username = "Sravya";
const password = "12345";

app.get("/login", function(request, response) {
    request.session.username = username;
    response.send("Login successful.");
});

app.get("/profile", function(request, response) {
    if (request.session.username) {
        response.send("Welcome " + request.session.username);
    } else {
        response.send("Please login first.");
    }
});

app.get("/logout", function(request, response) {
    request.session.destroy(function() {
        response.send("Logout successful.");
    });
});

app.listen(3026, function() {
    console.log("Experiment 45 running at http://localhost:3026");
});