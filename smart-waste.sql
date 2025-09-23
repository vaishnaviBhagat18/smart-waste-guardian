CREATE DATABASE smart_waste;
USE smart_waste;

CREATE TABLE reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description TEXT,
  image_path VARCHAR(255),
  latitude DECIMAL(10,7),
  longitude DECIMAL(10,7),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from reports;