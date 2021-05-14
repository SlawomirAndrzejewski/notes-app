const fs = require("fs")
const { linkSync } = require("node:fs")

// fs.writeFileSync("notes.txt", "This is first note.")

fs.appendFileSync("notes.txt", " This is second note.")

