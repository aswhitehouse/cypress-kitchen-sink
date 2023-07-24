const express = require('express');
const path = require('path');

const app = express();
const PORT = 4002;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// Route to serve the main.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
