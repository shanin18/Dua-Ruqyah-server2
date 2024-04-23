const express = require("express");
const db = require("../database.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.all("SELECT * FROM sub_category", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

module.exports = router;
