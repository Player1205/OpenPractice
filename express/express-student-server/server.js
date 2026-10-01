const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Express.js Server"
    });
});

// About route
app.get("/about", (req, res) => {
    res.json({
        message: "This is the About page"
    });
});

// Students API route
app.get("/api/students", (req, res) => {
    const students = [
        {
            id: 1,
            name: "Rahul",
            course: "CSE"
        },
        {
            id: 2,
            name: "Priya",
            course: "IT"
        },
        {
            id: 3,
            name: "Aman",
            course: "CSE"
        }
    ];

    res.json(students);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});