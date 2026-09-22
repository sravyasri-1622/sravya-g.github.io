const mysql = require("mysql2");

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

    const sql = "INSERT INTO students (name, course) VALUES (?, ?)";

    connection.query(sql, ["Sravya", "BTech"], function(error) {
        if (error) {
            console.log("Data insertion failed.");
            console.log("Error:", error.message);
            connection.end();
            return;
        }

        console.log("Student data inserted successfully.");
        connection.end();
    });
});