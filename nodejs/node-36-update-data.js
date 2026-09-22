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

    const sql = "UPDATE students SET course = ? WHERE name = ?";

    connection.query(sql, ["Computer Science", "Sravya"], function(error, result) {
        if (error) {
            console.log("Data update failed.");
            console.log("Error:", error.message);
            connection.end();
            return;
        }

        console.log("Student data updated successfully.");
        console.log("Rows updated:", result.affectedRows);

        connection.end();
    });
});