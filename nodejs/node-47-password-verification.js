const bcrypt = require("bcryptjs");

const password = "12345";

bcrypt.hash(password, 10, function(error, hashedPassword) {
    if (error) {
        console.log("Password hashing failed.");
        return;
    }

    bcrypt.compare(password, hashedPassword, function(error, result) {
        if (error) {
            console.log("Password verification failed.");
            return;
        }

        if (result) {
            console.log("Password verified successfully.");
        } else {
            console.log("Password verification failed.");
        }
    });
});