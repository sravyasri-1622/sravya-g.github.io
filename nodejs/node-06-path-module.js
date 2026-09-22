const path = require("path");

const filePath = "C:\\Users\\Student\\Documents\\student.txt";

console.log("File Path:", filePath);
console.log("File Name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));