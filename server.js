const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable from Render, or fallback to 3000 locally

// Middleware to parse JSON data from the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route to get a response from OpenAI API
app.post('/openai', async (req, res) => {
  const prompt = req.body.prompt || "Hello, how can I assist you today?";

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 50
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({
      status: 'success',
      data: response.data.choices[0].text.trim() // Send the OpenAI response text back
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching data from OpenAI API'
    });
  }
});

// Start the server on the given port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
