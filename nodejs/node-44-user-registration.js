const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.post("/register", function(request, response) {
    const username = request.body.username;
    const password = request.body.password;

    if (!username || !password) {
        response.status(400).send("Username and password are required.");
        return;
    }

    users.push({
        username: username,
        password: password
    });

    response.send("User registered successfully.");
});

app.get("/users", function(request, response) {
    response.json(users);
});

app.listen(3025, function() {
    console.log("Experiment 44 running at http://localhost:3025");
});