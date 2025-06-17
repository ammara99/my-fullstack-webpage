const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));  // Serve static files (HTML, CSS, JS)

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from Node.js Backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
