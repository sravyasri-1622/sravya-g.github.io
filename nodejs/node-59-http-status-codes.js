const express = require("express");

const app = express();

const students = [
    {
        id: 1,
        name: "Sravya",
        course: "BTech"
    },
    {
        id: 2,
        name: "Deekshitha",
        course: "BTech"
    }
];

app.get("/students", function(request, response) {
    response.status(200).json(students);
});

app.get("/students/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            response.status(200).json(students[i]);
            return;
        }
    }

    response.status(404).send("Student not found.");
});

app.post("/students", function(request, response) {
    response.status(201).send("Student created successfully.");
});

app.listen(3038, function() {
    console.log("Experiment 59 running at http://localhost:3038");
});