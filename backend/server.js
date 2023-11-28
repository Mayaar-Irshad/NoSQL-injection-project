const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const User = require("./models/userModel");

const SECRET_KEY = "super-secret-key";

// connect to express app
const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://zayhotz:zFdwspzH68pdJvMi@cluster10.9dxq17s.mongodb.net/usersDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("\nServer connected to port 3001 and MongoDb");
    });
  })
  .catch((error) => {
    console.log("\nUnable to connect to Server and/or MongoDB", error);
  });

// middleware
app.use(bodyParser.json());
app.use(cors());

//Routes

// REGISTER
// POST REGISTER
app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    // Storing the password without hashing
    const newUser = new User({ email, username, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

//GET Registered Users
app.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // Directly comparing the plaintext passwords
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});
