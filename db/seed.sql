-- db/seed.sql
\c job_tracker;

INSERT INTO applications(company, position, status, date_applied) VALUES
    ('Company A', 'Software Engineer', 'Applied', '2023-06-01'),
    ('Company B', 'Backend Developer', 'Interviewing', '2023-06-10'),
    ('Company C', 'Frontend Developer', 'Rejected', '2023-06-15'),
    ('Company D', 'Full Stack Developer', 'Offered', '2023-06-20');
