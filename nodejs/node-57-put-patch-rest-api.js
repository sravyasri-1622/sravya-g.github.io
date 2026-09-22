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

app.put("/students/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].name = request.body.name;
            students[i].course = request.body.course;

            response.json(students[i]);
            return;
        }
    }

    response.status(404).send("Student not found.");
});

app.listen(3036, function() {
    console.log("Experiment 57 running at http://localhost:3036");
});