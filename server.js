const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Example POST route (optional)
app.post('/data', (req, res) => {
    console.log(req.body);
    res.json({ message: "Data received!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
