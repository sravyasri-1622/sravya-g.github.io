const express = require("express");

const app = express();

const studentRoutes = require("./routes/student");

app.use("/students", studentRoutes);

app.get("/", function(request, response) {
    response.send("<h1>Modular Express Application</h1>");
});

app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});