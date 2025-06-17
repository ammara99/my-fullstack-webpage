require('dotenv').config();
const http = require('http');
const axios = require('axios');

// Fetch API URL from .env file (or use a hardcoded URL here)
const CAT_FACTS_API_URL = process.env.CAT_FACTS_API_URL || 'https://catfact.ninja/fact';

http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/cat-facts') {
    try {
      // Fetch random cat fact from the API
      const response = await axios.get(CAT_FACTS_API_URL);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching data from the API:', error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error fetching data from the Cat Facts API');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
