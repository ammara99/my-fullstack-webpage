const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data from the body of the request
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// POST route to handle data
app.post('/submit', (req, res) => {
  // Access data sent in the request body
  const { name, message } = req.body;

  // Respond back with a message including the received data
  res.json({
    status: 'success',
    data: { name, message }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
