const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Define the path to SQLite database file
const dbPath = path.join(__dirname, "dua_main.sqlite");

// Connect to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQLite database.");
});

module.exports = db;
