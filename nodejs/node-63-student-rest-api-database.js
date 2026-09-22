const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sravya@333",
    database: "studentdb"
});

connection.connect(function(error) {
    if (error) {
        console.log("Database connection failed.");
        console.log("Error:", error.message);
        return;
    }

    console.log("Database connected successfully.");
});

app.get("/students", function(request, response) {
    connection.query("SELECT * FROM students", function(error, results) {
        if (error) {
            response.status(500).send("Failed to retrieve students.");
            return;
        }

        response.json(results);
    });
});

app.post("/students", function(request, response) {
    const sql = "INSERT INTO students (name, course) VALUES (?, ?)";

    connection.query(
        sql,
        [request.body.name, request.body.course],
        function(error, result) {
            if (error) {
                response.status(500).send("Failed to add student.");
                return;
            }

            response.status(201).json({
                id: result.insertId,
                name: request.body.name,
                course: request.body.course
            });
        }
    );
});

app.listen(3042, function() {
    console.log("Experiment 63 running at http://localhost:3042");
});