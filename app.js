// app.js
// Dependencies
const express = require('express');
const cors = require('cors');
const applicationsController = require('./controllers/applicationController');

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/applications', applicationsController);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Job Application Tracker App!');
});

// Temporary: Disable favicon requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Catch-all route for handling requests to non-existent routes
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Export
module.exports = app;
