const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for users and carts
const users = [];
const carts = {};

// Helper function to find user by email
function findUser(email) {
  return users.find(user => user.email === email);
}

// Signup endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }
  if (findUser(email)) {
    return res.status(400).json({ error: 'User already exists.' });
  }
  users.push({ email, password });
  carts[email] = [];
  return res.status(201).json({ message: 'User registered successfully.' });
});

// Signin endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const user = findUser(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }
  return res.status(200).json({ message: 'Sign in successful.' });
});

// Get cart items for user
app.get('/cart', (req, res) => {
  const email = req.query.email;
  if (!email || !carts[email]) {
    return res.status(400).json({ error: 'Invalid user.' });
  }
  return res.status(200).json({ cartItems: carts[email] });
});

// Add items to cart
app.post('/cart', (req, res) => {
  const { email, items } = req.body;
  if (!email || !carts[email]) {
    return res.status(400).json({ error: 'Invalid user.' });
  }
  if (!Array.isArray(items)) {
    return res.status(400).json({ error: 'Items must be an array.' });
  }
  carts[email] = carts[email].concat(items);
  return res.status(200).json({ message: 'Items added to cart.' });
});

// Remove item from cart
app.delete('/cart/:email/:itemId', (req, res) => {
  const { email, itemId } = req.params;
  if (!email || !carts[email]) {
    return res.status(400).json({ error: 'Invalid user.' });
  }
  carts[email] = carts[email].filter(item => item.instanceId !== itemId);
  return res.status(200).json({ message: 'Item removed from cart.' });
});

const path = require('path');

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'fixed_index1_clean.html'));
});

app.listen(port, () => {
  console.log("Simple backend server running on http://localhost:" + port);
});
