const express = require("express");
const cors = require("cors");
const duasRoutes = require("./routes/duasRoutes.js");
const categoriesRoutes = require("./routes/categoriesRoutes.js");
const subCategoriesRoutes = require("./routes/subCategoriesRoutes.js");

const app = express();
const PORT = 5000;

// Use cors middleware
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Dua Ruqyah Server");
});

// Use route modules
app.use("/duas", duasRoutes);
app.use("/categories", categoriesRoutes);
app.use("/sub-categories", subCategoriesRoutes);

// Error handling middleware for CORS
app.use((err, req, res, next) => {
  if (err.name === "CORSError") {
    res.status(403).json({ error: "CORS error: Forbidden" });
  } else {
    next(err);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
