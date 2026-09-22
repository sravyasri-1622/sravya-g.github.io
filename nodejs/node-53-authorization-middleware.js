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

function authorization(request, response, next) {
    const username = request.query.username;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            if (users[i].role === "admin") {
                next();
                return;
            } else {
                response.status(403).send("You are not authorized.");
                return;
            }
        }
    }

    response.status(401).send("User not found.");
}

app.get("/admin", authorization, function(request, response) {
    response.send("Admin page accessed successfully.");
});

app.listen(3032, function() {
    console.log("Experiment 53 running at http://localhost:3032");
});