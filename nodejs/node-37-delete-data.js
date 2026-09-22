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

    const sql = "DELETE FROM students WHERE name = ?";

    connection.query(sql, ["Sravya"], function(error, result) {
        if (error) {
            console.log("Data deletion failed.");
            console.log("Error:", error.message);
            connection.end();
            return;
        }

        console.log("Student data deleted successfully.");
        console.log("Rows deleted:", result.affectedRows);

        connection.end();
    });
});