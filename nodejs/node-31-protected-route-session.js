const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false
}));

function checkAuthentication(request, response, next) {

    if (request.session.username) {
        next();
    } else {
        response.status(401).send("<h1>Access Denied. Please Login.</h1>");
    }

}

app.get("/login", function(request, response) {

    request.session.username = "Sravya";

    response.send("<h1>Login Successful</h1>");

});

app.get("/dashboard", checkAuthentication, function(request, response) {

    response.send("<h1>Protected Dashboard</h1><p>Welcome " +
        request.session.username + "</p>");

});

app.listen(3018, function() {

    console.log("Experiment 31 running at http://localhost:3018");

});