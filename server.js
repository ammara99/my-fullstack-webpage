const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (for your webpage)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
