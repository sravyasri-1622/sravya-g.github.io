const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Sravya", course: "BTech" },
    { id: 2, name: "Deekshitha", course: "BTech" }
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

    response.json(student);
});

app.put("/students/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].name = request.body.name;
            students[i].course = request.body.course;

            response.send("Student updated successfully.");
            return;
        }
    }

    response.status(404).send("Student not found.");
});

app.delete("/students/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);

            response.send("Student deleted successfully.");
            return;
        }
    }

    response.status(404).send("Student not found.");
});

app.listen(3020, function() {
    console.log("Experiment 39 running at http://localhost:3020");
});