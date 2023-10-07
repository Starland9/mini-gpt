const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, "dist")));

// Route all requests to the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
