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

app.listen(3033, function() {
    console.log("Experiment 54 running at http://localhost:3033");
});