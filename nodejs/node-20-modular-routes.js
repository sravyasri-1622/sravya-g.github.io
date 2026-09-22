const express = require("express");

const app = express();

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const studentRoutes = require("./routes/students");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/students", studentRoutes);

app.get("/", function(request, response) {
    response.send("<h1>Modular Routes Application</h1>");
});

app.listen(3004, function() {
    console.log("Server running at http://localhost:3004");
});