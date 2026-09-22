const express = require("express");

const app = express();

app.use(express.json());

let students = [];

function validateStudent(request, response, next) {
    if (!request.body.name || !request.body.course) {
        response.status(400).json({
            error: "Name and course are required."
        });
        return;
    }

    next();
}

app.post("/students", validateStudent, function(request, response) {
    const student = {
        id: students.length + 1,
        name: request.body.name,
        course: request.body.course
    };

    students.push(student);

    response.status(201).json(student);
});

app.get("/students", function(request, response) {
    response.json(students);
});

app.listen(3040, function() {
    console.log("Experiment 61 running at http://localhost:3040");
});