const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env
const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env file or default to 3000

// Middleware to parse JSON data from the body of the request
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// POST route to handle data
app.get('/random-dog', async (req, res) => {
  try {
    // Fetch a random dog image from The Dog API using API_URL from .env
    const response = await axios.get(process.env.API_URL);
    
    // Send the dog image URL back to the client
    res.json({
      status: 'success',
      image: response.data.message
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching dog image from API'
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
