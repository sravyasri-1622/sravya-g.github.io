const express = require("express");

const app = express();

app.use(express.json());

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

app.get("/login", function(request, response) {
    const username = request.query.username;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            response.json({
                message: "Login successful",
                username: users[i].username,
                role: users[i].role
            });
            return;
        }
    }

    response.status(401).send("User not found.");
});

app.listen(3029, function() {
    console.log("Experiment 50 running at http://localhost:3029");
});