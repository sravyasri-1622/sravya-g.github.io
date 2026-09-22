const express = require("express");

const app = express();

const users = [
    {
        username: "Sravya",
        role: "admin"
    },
    {
        username: "Deekshitha",
        role: "user"
    }
];

function checkAdmin(request, response, next) {
    const username = request.query.username;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            if (users[i].role === "admin") {
                next();
                return;
            } else {
                response.status(403).send("Access denied. Admins only.");
                return;
            }
        }
    }

    response.status(401).send("User not found.");
}

app.get("/admin", checkAdmin, function(request, response) {
    response.send("Welcome to the Admin Page.");
});

app.get("/home", function(request, response) {
    response.send("Welcome to the Home Page.");
});

app.listen(3031, function() {
    console.log("Experiment 52 running at http://localhost:3031");
});