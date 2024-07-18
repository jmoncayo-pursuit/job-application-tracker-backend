// validations/checkApplicationData.js
const checkApplicationData = (req, res, next) => {
  if (
    req.method === 'POST' &&
    (!req.body.company || !req.body.position)
  ) {
    return res
      .status(400)
      .json({ error: 'Company and position are required' });
  }

  if (req.method === 'PUT' && Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ error: 'At least one field to update is required' });
  }

  next();
};

module.exports = { checkApplicationData };
