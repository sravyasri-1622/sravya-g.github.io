const express = require("express");

const app = express();

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 25000 }
];

app.get("/products", function(request, response) {
    response.json(products);
});

app.post("/products", function(request, response) {
    const product = {
        id: products.length + 1,
        name: request.body.name,
        price: request.body.price
    };

    products.push(product);

    response.json(product);
});

app.put("/products/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products[i].name = request.body.name;
            products[i].price = request.body.price;

            response.send("Product updated successfully.");
            return;
        }
    }

    response.status(404).send("Product not found.");
});

app.delete("/products/:id", function(request, response) {
    const id = parseInt(request.params.id);

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products.splice(i, 1);

            response.send("Product deleted successfully.");
            return;
        }
    }

    response.status(404).send("Product not found.");
});

app.listen(3022, function() {
    console.log("Experiment 41 running at http://localhost:3022");
});