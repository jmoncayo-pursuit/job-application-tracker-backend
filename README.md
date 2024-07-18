# Job Application Tracker Backend

This repository contains the backend code for a job application tracker application. The backend provides API endpoints to manage job applications, allowing users to create, read, update, and delete application records.

## Features

- **Create applications:** Add new job applications with details like company, position, date applied, status, and notes.
- **Read applications:** Retrieve all applications or filter by status and order by company.
- **Update applications:** Modify existing application details, such as updating the status or adding notes.
- **Delete applications:** Remove unwanted application records.

## Technologies Used

- **Node.js:** JavaScript runtime environment
- **Express.js:** Web application framework for Node.js
- **PostgreSQL:** Relational database management system
- **pg-promise:** PostgreSQL client library for Node.js
- **dotenv:** Loads environment variables from a `.env` file

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jmoncayo-pursuit/job-application-tracker-backend.git
   ```

2. **Install dependencies:**

   ```bash
   cd job-application-tracker-backend
   npm install
   ```

3. **Set up the database:**

   - Create a PostgreSQL database (e.g., `job_tracker`).
   - Create a `.env` file in the root directory and add the following environment variables, replacing the placeholders with your actual database credentials:

   ```
   PG_HOST=localhost
   PG_PORT=5432
   PG_USER=your_db_user
   PG_DATABASE=job_tracker
   PG_PASSWORD=your_db_password
   PORT=3000 
   ```

4. **Run database migrations:**

   - Execute the SQL script in `db/schema.sql` to create the `applications` table.
   - Optionally, populate the database with sample data from `db/seed.sql`.

5. **Start the server:**

   ```bash
   npm start
   ```

   The server will start running at `http://localhost:3345` (or the port specified in your `.env` file).

## API Endpoints

The following API endpoints are available:

- **GET /applications:** Get all applications.
- **GET /applications/:id:** Get an application by ID.
- **POST /applications:** Create a new application.
- **PUT /applications/:id:** Update an application by ID.
- **DELETE /applications/:id:** Delete an application by ID.