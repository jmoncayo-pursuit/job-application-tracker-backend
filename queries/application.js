// queries/application.js
const db = require('../db/dbConfig');

const getAllApplications = async (queryParams) => {
  try {
    let baseQuery = 'SELECT * FROM applications';
    const whereClause = [];
    const orderByClause = [];

    if (queryParams.status) {
      whereClause.push(`status = '${queryParams.status}'`);
    }

    if (queryParams.order) {
      orderByClause.push(
        `company ${queryParams.order.toUpperCase()}`
      );
    }

    let finalQuery = baseQuery;

    if (whereClause.length > 0) {
      finalQuery += ` WHERE ${whereClause.join(' AND ')}`;
    }

    if (orderByClause.length > 0) {
      finalQuery += ` ORDER BY ${orderByClause.join(', ')}`;
    }

    const allApplications = await db.any(finalQuery);
    return allApplications;
  } catch (error) {
    console.error('Error in getAllApplications:', error);
    throw error;
  }
};

const getApplication = async (id) => {
  try {
    const application = await db.one(
      'SELECT * FROM applications WHERE id=$1',
      id
    );
    return application;
  } catch (error) {
    console.error('Error in getApplication:', error);
    throw error;
  }
};

const createApplication = async (application) => {
  try {
    const newApplication = await db.one(
      'INSERT INTO applications (company, position, status, date_applied) VALUES ($1, $2, $3, $4) RETURNING *',
      [
        application.company,
        application.position,
        application.status,
        application.date_applied,
      ]
    );
    return newApplication;
  } catch (error) {
    return error;
  }
};

const deleteApplication = async (id) => {
  try {
    const deletedApplication = await db.one(
      'DELETE FROM applications WHERE id = $1 RETURNING *',
      id
    );
    return deletedApplication;
  } catch (error) {
    return error;
  }
};

const updateApplication = async (id, application) => {
  try {
    const columnsToUpdate = Object.keys(application);
    const values = columnsToUpdate.map((col) => application[col]);
    const setClause = columnsToUpdate
      .map((col, index) => `${col} = $${index + 1}`)
      .join(', ');

    const query = `UPDATE applications SET ${setClause} WHERE id = $${
      columnsToUpdate.length + 1
    } RETURNING *`;

    const updatedApplication = await db.one(query, [...values, id]);
    return updatedApplication;
  } catch (error) {
    console.error('Error in updateApplication:', error);
    throw error;
  }
};

module.exports = {
  getAllApplications,
  getApplication,
  createApplication,
  deleteApplication,
  updateApplication,
};
