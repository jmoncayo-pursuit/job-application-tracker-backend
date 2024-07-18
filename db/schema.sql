-- db/schema.sql
DROP DATABASE IF EXISTS job_tracker;

CREATE DATABASE job_tracker;

\c job_tracker;

CREATE TABLE applications(
    id SERIAL PRIMARY KEY,
    company TEXT NOT NULL,
    position TEXT NOT NULL,
    status TEXT,
    date_applied DATE
);
