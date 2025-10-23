const express = require("express");
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("main page on express");
});

app.get("/about", (req, res) => {
  res.send("about us on express");
});

app.get("/search", (req, res) => {
  const searchQuery = req.query.query;
  res.send(`search results: ${searchQuery}`);
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`user with ID: ${userId}`);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
