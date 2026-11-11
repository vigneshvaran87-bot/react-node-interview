const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/submit", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Both fields are required",
    });
  }

  res.json({
    success: true,
    message: `Welcome ${name}! Your email is ${email}`,
  });
});


app.get("/api/time", (req, res) => {
    res.json({
        message: "Stopwatch API connected successfully",
        currentTime: new Date()
    });
});


// GET API - Request and Response
app.get("/api/users", (req, res) => {

    const users = [
        { id: 1, name: "Vignesh", email: "vignesh@gmail.com" },
        { id: 2, name: "Arun", email: "arun@gmail.com" },
        { id: 3, name: "Kumar", email: "kumar@gmail.com" }
    ];

    res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users
    });
});


// POST API - Request and Response
app.post("/api/users", (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: {
            id: 4,
            name: name,
            email: email
        }
    });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
