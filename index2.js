const express = require("express");
const app = express();

// Students JSON Data
const students = [
  { id: 1, name: "Amit", age: 20 },
  { id: 2, name: "Priya", age: 22 },
  { id: 3, name: "Rahul", age: 21 }
];

// API Route
app.get("/students", (req, res) => {
  res.json(students);
});

// Server Start
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});