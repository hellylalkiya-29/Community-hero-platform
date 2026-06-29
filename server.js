const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Community Hero Platform')));

let users = [];
let issues = [];

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.post('/api/signup', (req, res) => {
  users.push(req.body);
  res.json({ success: true, user: req.body });
});

app.get('/api/issues', (req, res) => res.json(issues));

app.post('/api/issues', (req, res) => {
  const newIssue = { id: 'CHR-' + Date.now(), ...req.body, status: 'open' };
  issues.push(newIssue);
  res.json({ success: true, issue: newIssue });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Community Hero Platform', 'community_hero_platform.html'));
});

app.listen(5000, () => {
  console.log('✅ Server running!');
  console.log('👉 Open: http://localhost:5000');
});