const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// SQLite database file
const dbPath = path.resolve(__dirname, "posts.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS saved_posts (
    id INTEGER PRIMARY KEY,
    title TEXT,
    body TEXT
  )
`);

// Save a post
app.post("/save", (req, res) => {
  const { id, title, body } = req.body;

  // Insert if not exists
  const query = `INSERT OR IGNORE INTO saved_posts (id, title, body) VALUES (?, ?, ?)`;
  db.run(query, [id, title, body], function (err) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({
      message: "Post saved successfully",
      savedPost: { id, title, body },
    });
  });
});

// Get all saved posts
app.get("/save", (req, res) => {
  db.all(`SELECT * FROM saved_posts`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(rows);
  });
});

// Delete a saved post by ID
app.delete("/save/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const query = `DELETE FROM saved_posts WHERE id = ?`;

  db.run(query, [postId], function (err) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (this.changes === 0) {
      return res
        .status(404)
        .json({ message: `No post found with ID ${postId}` });
    }
    res.json({ message: `Post with ID ${postId} deleted.` });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
