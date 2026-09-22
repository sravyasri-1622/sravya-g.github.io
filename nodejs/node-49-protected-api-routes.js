const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const secretKey = "mysecretkey";

app.get("/login", function(request, response) {
    const user = {
        username: "Sravya"
    };

    const token = jwt.sign(user, secretKey, {
        expiresIn: "1h"
    });

    response.json({
        message: "Login successful",
        token: token
    });
});

function authenticateToken(request, response, next) {
    const token = request.query.token;

    if (!token) {
        response.status(401).send("Access denied. Token required.");
        return;
    }

    jwt.verify(token, secretKey, function(error, user) {
        if (error) {
            response.status(403).send("Invalid token.");
            return;
        }

        request.user = user;
        next();
    });
}

app.get("/dashboard", authenticateToken, function(request, response) {
    response.send("Welcome to protected dashboard, " + request.user.username);
});

app.listen(3028, function() {
    console.log("Experiment 49 running at http://localhost:3028");
});