const express = require("express");
const db = require("../database.js");

const router = express.Router();

router.get("/", (req, res) => {
  const { cat_id } = req.query;
  let query = "SELECT * FROM category";

  if (cat_id) {
    query += " WHERE cat_id = ?";
  }

  db.all(query, [cat_id], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

module.exports = router;
