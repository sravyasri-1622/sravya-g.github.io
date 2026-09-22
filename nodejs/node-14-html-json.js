const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("<h1>This is an HTML Response</h1>");
});

app.get("/student", function(request, response) {

    response.json({
        name: "Sravya",
        course: "BTech",
        year: 1
    });

});

app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});