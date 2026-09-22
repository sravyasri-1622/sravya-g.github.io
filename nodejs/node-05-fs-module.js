const fs = require("fs");

fs.writeFileSync("student.txt", "Name: Sravya\nCourse: BTech");

console.log("File created successfully.");

const data = fs.readFileSync("student.txt", "utf8");

console.log("File Content:");
console.log(data);