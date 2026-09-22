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

app.get("/students/:id", function(request, response) {
    const id = parseInt(request.params.id);

    try {
        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                response.json(students[i]);
                return;
            }
        }

        throw new Error("Student not found.");
    } catch (error) {
        response.status(404).json({
            error: error.message
        });
    }
});

app.use(function(error, request, response, next) {
    response.status(500).json({
        error: "Something went wrong."
    });
});

app.listen(3039, function() {
    console.log("Experiment 60 running at http://localhost:3039");
});