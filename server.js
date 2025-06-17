const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder (where your index.html is located)
app.use(express.static('public'));

// Route to serve the index.html file when the root is requested
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
