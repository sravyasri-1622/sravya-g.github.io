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
            response.status(500).send("Data retrieval failed.");
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
                response.status(500).send("Data insertion failed.");
                return;
            }

            response.send("Student added successfully. ID: " + result.insertId);
        }
    );
});

app.put("/students/:id", function(request, response) {
    const sql = "UPDATE students SET name = ?, course = ? WHERE id = ?";

    connection.query(
        sql,
        [request.body.name, request.body.course, request.params.id],
        function(error, result) {
            if (error) {
                response.status(500).send("Data update failed.");
                return;
            }

            response.send("Student updated successfully.");
        }
    );
});

app.delete("/students/:id", function(request, response) {
    const sql = "DELETE FROM students WHERE id = ?";

    connection.query(sql, [request.params.id], function(error, result) {
        if (error) {
            response.status(500).send("Data deletion failed.");
            return;
        }

        response.send("Student deleted successfully.");
    });
});

app.listen(3023, function() {
    console.log("Experiment 42 running at http://localhost:3023");
});