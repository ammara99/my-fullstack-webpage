const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable from Render, or fallback to 3000 locally

// Middleware to parse JSON data from the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route to handle data
app.get('/random-dog', async (req, res) => {
  try {
    // Fetch data from the external API using the API_URL from the environment variables
    const response = await axios.get(process.env.API_URL);
    
    res.json({
      status: 'success',
      image: response.data.message // Response from Dog API (dog image URL)
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching dog image from API'
    });
  }
});

// Start the server on the given port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
