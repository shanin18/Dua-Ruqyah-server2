const express = require("express");
const db = require("../database.js");

const router = express.Router();

router.get("/", (req, res) => {
  const { cat_id, subcat_id } = req.query;
  let query = "SELECT * FROM dua";

  if (cat_id && subcat_id) {
    query += " WHERE cat_id = ? AND subcat_id = ?";
  }

  db.all(query, [cat_id, subcat_id], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

module.exports = router;
