const bcrypt = require("bcryptjs");

const password = "12345";

bcrypt.hash(password, 10, function(error, hashedPassword) {
    if (error) {
        console.log("Password hashing failed.");
        return;
    }

    console.log("Original Password:", password);
    console.log("Hashed Password:", hashedPassword);
});