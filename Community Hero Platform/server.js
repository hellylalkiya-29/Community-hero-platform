const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = [];
let issues = [];

// Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Signup
app.post('/api/signup', (req, res) => {
  users.push(req.body);
  res.json({ success: true, user: req.body });
});

// Get Issues
app.get('/api/issues', (req, res) => res.json(issues));

// Report Issue
app.post('/api/issues', (req, res) => {
  const newIssue = { id: 'CHR-' + Date.now(), ...req.body, status: 'open' };
  issues.push(newIssue);
  res.json({ success: true, issue: newIssue });
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));