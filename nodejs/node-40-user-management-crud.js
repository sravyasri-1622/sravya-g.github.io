const express = require("express");

const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Sravya", email: "sravya@example.com" },
    { id: 2, name: "Deekshitha", email: "deekshitha@example.com" }
];

app.get("/users", function(request, response) {
    response.json(users);
});

app.post("/users", function(request, response) {
    const user = {
        id: users.length + 1,
        name: request.body.name,
        email: request.body.email
    };

    users.push(user);

    response.json(user);
});

app.put("/users/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].name = request.body.name;
            users[i].email = request.body.email;

            response.send("User updated successfully.");
            return;
        }
    }

    response.status(404).send("User not found.");
});

app.delete("/users/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);

            response.send("User deleted successfully.");
            return;
        }
    }

    response.status(404).send("User not found.");
});

app.listen(3021, function() {
    console.log("Experiment 40 running at http://localhost:3021");
});node-41-product-management-crud.js