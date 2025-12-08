const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "DATA", "vendorC.json");

console.log("File dibaca dari:", filePath);

const raw = fs.readFileSync(filePath, "utf8");
console.log("=== Output Original Vendor C ===");
console.log(raw);