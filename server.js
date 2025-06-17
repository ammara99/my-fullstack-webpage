require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// The API URL for fetching cat facts
const CAT_FACTS_API_URL = process.env.CAT_FACTS_API_URL || 'https://catfact.ninja/fact';
const PORT = process.env.PORT || 3000;

// Serve the index.html page when accessing the root
http.createServer(async (req, res) => {
  // Serve the index.html page for the root route
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }

  // Fetch cat facts route
  else if (req.method === 'GET' && req.url === '/cat-facts') {
    try {
      const response = await axios.get(CAT_FACTS_API_URL);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response.data));  // Send the cat facts as JSON
    } catch (error) {
      console.error('Error fetching data from the API:', error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error fetching data from the Cat Facts API');
    }
  }

  // Handle 404 errors
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
