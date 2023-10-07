import express from "express";
import path from "path";

const app = express();
const port = 3000;

const buildPath = path.resolve("dist");

// Serve static files from the 'build' folder
app.use(express.static(buildPath));

// Route all requests to the index.html file
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: buildPath });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
