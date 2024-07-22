-- db/seed.sql
\c job_tracker;

INSERT INTO applications (company, position, date_applied, status, notes)
VALUES
  
  ('Google', 'Software Engineer', '2023-10-26', 'Applied', 'Submitted application through website.'),
  ('Amazon', 'Frontend Developer', '2023-10-22', 'Interviewing', 'First round interview completed.'),
  ('Microsoft', 'Data Scientist', '2023-10-18', 'Rejected', 'Received rejection email.'),
  ('Facebook', 'Product Manager', '2023-10-15', 'Applied', 'Referred by a friend.'),
  ('Netflix', 'UI/UX Designer', '2023-10-28', 'Applied', 'Portfolio submitted.'),
  ('Tesla', 'Electrical Engineer', '2023-10-25', 'Networking', 'Attended company info session.'),
  ('Spotify', 'Data Analyst', '2023-10-21', 'Applied', 'Completed online assessment.'),
  ('Airbnb', 'Software Engineer Intern', '2023-10-19', 'Offer', 'Accepted internship offer!'),
  ('Uber', 'Product Designer', '2023-10-17', 'Interviewing', 'Second interview scheduled.'),
  ('Pinterest', 'Data Engineer', '2023-10-14', 'Applied', 'Tailored resume and cover letter.'),
  ('Dropbox', 'Backend Developer', '2023-10-12', 'Rejected', 'Not a good fit for the role.'),
  ('LinkedIn', 'Product Marketing Manager', '2023-10-10', 'Applied', 'Networking with employees.'),
  ('Salesforce', 'Sales Development Representative', '2023-10-08', 'Interviewing', 'Preparing for final round interview.'),
  ('Stripe', 'Software Engineer', '2023-10-05', 'Applied', 'Excited about the companys mission.'),
  ('Twitter', 'Data Scientist', '2023-10-03', 'Applied', 'Completed coding challenge.'),
  ('Shopify', 'Frontend Developer', '2023-09-29', 'Interviewing', 'Technical interview scheduled.'),
  ('Square', 'Backend Engineer', '2023-09-27', 'Applied', 'Strong referral from a former colleague.'),
  ('Instacart', 'Product Manager', '2023-09-25', 'Rejected', 'Lack of relevant experience.'),
  ('Lyft', 'Software Engineer Intern', '2023-09-22', 'Applied', 'Hoping to get an interview.'),
  ('Splunk', 'Data Analyst', '2023-09-20', 'Networking', 'Connected with a recruiter on LinkedIn.')
; 
