// server.js
// Dependencies
const app = require('./app');

// Configuration
require('dotenv').config();
const PORT = process.env.PORT;

// Listener
app.listen(PORT, () => {
  console.log(`Job Application Tracker Listening on port: ${PORT}`);
});
