const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const secretKey = "your_secret_key"; // Secret key jo JWT ko generate aur verify karne ke liye istemal hoga

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Mock user database
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

// Login route to generate JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  console.log(user);
  if (user) {
    // JWT banakar client ko bhejna
    const token = jwt.sign({ userId: user.id }, secretKey);
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

// Route that requires authentication
app.get("/protected", verifyToken, (req, res) => {
  // Agar token sahi hai, toh protected data bhejna
  res.json({ message: "This is protected data!" });
});

// Middleware to verify JWT
function verifyToken(req, res, next) {
  // Header, query string ya request body se token prapt karna
  const token =
    req.headers["authorization"] || req.query.token || req.body.token;

  if (!token) {
    return res.status(403).json({ error: "Token is missing" });
  }

  // Token ko verify karna
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.userId = decoded.userId; // Token se user ID prapt karna
    next();
  });
}

// Server shuru karna
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
