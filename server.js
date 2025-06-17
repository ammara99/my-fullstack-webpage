const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to fetch all countries
app.get('/countries', async (req, res) => {
  try {
    // Fetching country data from REST Countries API
    const response = await axios.get('https://restcountries.com/v3.1/all');
    res.json(response.data); // Send the data as JSON response
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch country data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
