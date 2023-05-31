const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = "INSERT INTO login (`username`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [
    username,
    email,
    password
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.log("Signup error:", err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log("Signup success:", { username, email,}); // Log the signup success
    return res.json({ message: 'Signup successful' });
  });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log("Login attempt:", email); // Log the login attempt
  
    const sql = 'SELECT * FROM login WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        console.log("Login error:", err); // Log the login error
        res.status(500).json({ error: 'Internal server error' });
      } else {
        if (result.length > 0) {
          console.log("Login success:", result); // Log the login success with fetched data
          res.status(200).json({ message: 'Success' });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      }
    });
  });
  
  
  
app.listen(8081, ()=> {
    console.log("listening");
})