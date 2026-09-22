const express = require("express");

const app = express();

app.use(express.json());

const users = [
    {
        id: 1,
        username: "Sravya",
        password: "12345",
        role: "admin"
    },
    {
        id: 2,
        username: "Deekshitha",
        password: "12345",
        role: "user"
    }
];

function authenticate(request, response, next) {
    const username = request.body.username;
    const password = request.body.password;

    for (let i = 0; i < users.length; i++) {
        if (
            users[i].username === username &&
            users[i].password === password
        ) {
            request.user = users[i];
            next();
            return;
        }
    }

    response.status(401).send("Invalid username or password.");
}

function authorizeAdmin(request, response, next) {
    if (request.user.role === "admin") {
        next();
        return;
    }

    response.status(403).send("Access denied. Admins only.");
}

app.post("/login", authenticate, function(request, response) {
    response.json({
        message: "Login successful.",
        username: request.user.username,
        role: request.user.role
    });
});

app.get("/admin", function(request, response) {
    response.send("Please login as an admin.");
});

app.post("/admin", authenticate, authorizeAdmin, function(request, response) {
    response.send("Welcome to the Admin API.");
});

app.listen(3044, function() {
    console.log("Experiment 65 running at http://localhost:3044");
});