const fs = require ("fs");

fs.writeFileSync("frz.txt", "this is frz file")

const data = fs.readFileSync("frz.txt","utf8")

console.log(data)