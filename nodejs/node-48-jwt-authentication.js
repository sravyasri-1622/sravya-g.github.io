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

app.listen(3027, function() {
    console.log("Experiment 48 running at http://localhost:3027");
});