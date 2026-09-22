const express = require("express");

const app = express();

app.use(express.json());

let students = [
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

app.post("/students", function(request, response) {
    const student = {
        id: students.length + 1,
        name: request.body.name,
        course: request.body.course
    };

    students.push(student);

    response.status(201).json(student);
});

app.listen(3041, function() {
    console.log("Experiment 62 running at http://localhost:3041");
});