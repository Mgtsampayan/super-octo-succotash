const pool = require("../config/db");

const createDocumentRequestTable = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS document_requests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      student_id INT NOT NULL,
      document_type VARCHAR(50) NOT NULL,
      status VARCHAR(50) DEFAULT 'Pending',
      scheduled_date DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

createDocumentRequestTable();