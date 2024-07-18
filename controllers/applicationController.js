// controllers/applicationsController.js
const express = require('express');
const applications = express.Router();
const {
  getAllApplications,
  getApplication,
  createApplication,
  deleteApplication,
  updateApplication,
} = require('../queries/application');
const {
  checkApplicationData,
} = require('../validations/checkApplicationData');

applications.get('/', async (req, res) => {
  try {
    const allApplications = await getAllApplications(req.query);
    if (allApplications[0]) {
      res.status(200).json(allApplications);
    } else {
      res.status(404).json({ error: 'No applications found.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

applications.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const application = await getApplication(id);
    if (application) {
      res.status(200).json(application);
    } else {
      res.status(404).json({ error: 'Application Not Found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

applications.post('/', checkApplicationData, async (req, res) => {
  try {
    const newApplication = await createApplication(req.body);
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

applications.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedApplication = await deleteApplication(id);
  if (deletedApplication.id) {
    res
      .status(200)
      .json({ message: 'Application successfully deleted.' });
  } else {
    res.status(404).json({ error: 'Application Not Found.' });
  }
});

applications.put('/:id', checkApplicationData, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedApplication = await updateApplication(id, req.body);
    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(404).json({ error: 'Application Not Found.' });
  }
});

module.exports = applications;
