const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/set", function(request, response) {

    response.cookie("username", "Sravya");

    response.send("<h1>Cookie Set</h1>");

});

app.get("/read", function(request, response) {

    const username = request.cookies.username;

    if (username) {
        response.send("<h1>Username: " + username + "</h1>");
    } else {
        response.send("<h1>No Cookie Found</h1>");
    }

});

app.get("/delete", function(request, response) {

    response.clearCookie("username");

    response.send("<h1>Cookie Deleted</h1>");

});

app.listen(3015, function() {

    console.log("Experiment 28 running at http://localhost:3015");

});