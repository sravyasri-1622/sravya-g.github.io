const express = require("express");

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Sravya",
        course: "BTech"
    }
];

app.get("/students", function(request, response) {
    response.json(students);
});

app.post("/students", function(request, response) {
    const student = {
        id: students.length + 1,
        name: request.body.name,
        course: request.body.course
    };

    students.push(student);

    response.status(201).json(student);
});

app.listen(3035, function() {
    console.log("Experiment 56 running at http://localhost:3035");
});