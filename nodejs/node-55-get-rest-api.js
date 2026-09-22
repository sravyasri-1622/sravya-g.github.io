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
    response.json(students);
});

app.get("/students/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            response.json(students[i]);
            return;
        }
    }

    response.status(404).send("Student not found.");
});

app.listen(3034, function() {
    console.log("Experiment 55 running at http://localhost:3034");
});