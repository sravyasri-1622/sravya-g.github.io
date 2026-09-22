const express = require("express");

const app = express();

app.use(express.json());

let students = [];

function validateStudent(request, response, next) {
    const name = request.body.name;
    const course = request.body.course;

    if (!name || !course) {
        response.status(400).send("Name and course are required.");
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

    response.json(student);
});

app.get("/students", function(request, response) {
    response.json(students);
});

app.listen(3024, function() {
    console.log("Experiment 43 running at http://localhost:3024");
});