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

app.get("/users", function(request, response) {
    response.json(users);
});

app.get("/admin", function(request, response) {
    const username = request.query.username;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            if (users[i].role === "admin") {
                response.send("Welcome Admin " + username);
            } else {
                response.send("Access denied. Admins only.");
            }
            return;
        }
    }

    response.status(401).send("User not found.");
});

app.listen(3030, function() {
    console.log("Experiment 51 running at http://localhost:3030");
});