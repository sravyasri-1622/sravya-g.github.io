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

    const sql = "SELECT * FROM students";

    connection.query(sql, function(error, results) {
        if (error) {
            console.log("Data retrieval failed.");
            console.log("Error:", error.message);
            connection.end();
            return;
        }

        console.log("Student Records:");

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);
        }

        connection.end();
    });
});