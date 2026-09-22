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

    console.log("Database connected successfully.");

    const sql = `
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            course VARCHAR(100)
        )
    `;

    connection.query(sql, function(error) {
        if (error) {
            console.log("Table creation failed.");
            console.log("Error:", error.message);
            connection.end();
            return;
        }

        console.log("Students table created successfully.");

        connection.end(function(error) {
            if (error) {
                console.log("Connection closing failed.");
                return;
            }

            console.log("Database connection closed.");
        });
    });
});