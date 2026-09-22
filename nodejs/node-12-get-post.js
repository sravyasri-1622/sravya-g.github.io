const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function(request, response) {
    response.send(`
        <h1>GET Request</h1>
        <form method="POST" action="/submit">
            <input type="text" name="name" placeholder="Enter name">
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/submit", function(request, response) {
    response.send(
        "<h1>POST Request</h1>" +
        "<p>Hello " + request.body.name + "</p>"
    );
});

app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});