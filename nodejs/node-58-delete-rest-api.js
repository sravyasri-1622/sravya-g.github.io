const express = require("express");

const app = express();

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

app.get("/students", function(request, response) {
    response.json(students);
});

app.listen(3037, function() {
    console.log("Experiment 58 running at http://localhost:3037");
});