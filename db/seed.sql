-- db/seed.sql
\c job_tracker;

INSERT INTO applications (company, position, date_applied, status, notes)
VALUES
  ('Google', 'Software Engineer', '2023-10-26', 'Applied', 'Submitted application through website.'),
  ('Amazon', 'Frontend Developer', '2023-10-22', 'Interviewing', 'First round interview completed.'),
  ('Microsoft', 'Data Scientist', '2023-10-18', 'Rejected', 'Received rejection email.'),
  ('Facebook', 'Product Manager', '2023-10-15', 'Applied', 'Referred by a friend.');
