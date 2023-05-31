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

app.post('/signup', (req, res) => { // handling signup api call
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const checkExistingSql = 'SELECT * FROM login WHERE username = ? OR email = ?';
  const checkExistingValues = [username, email];

  db.query(checkExistingSql, checkExistingValues, (err, result) => {
    if (err) {
      console.log("Signup error:", err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (result.length > 0) {
      console.log("Signup error: Username or email already exists"); // Add console log message
      return res.status(409).json({ error: 'Username or email already exists' });
    }

    const insertSql = "INSERT INTO login (`username`, `email`, `password`) VALUES (?, ?, ?)";
    const insertValues = [username, email, password];

    db.query(insertSql, insertValues, (err) => {
      if (err) {
        console.log("Signup error:", err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      console.log("Signup success:", { username, email, password } , "Added to database");
      return res.json({ message: 'Signup successful' });
    });
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
        console.log("User not found"); // Add console log message
        res.status(404).json({ message: 'User not found' });
      }
    }
  });
});
  
app.listen(8081, ()=> {
    console.log("listening");
})