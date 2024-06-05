const pool = require('../config/db');

exports.getStudentById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM students WHERE cid = ?', [id]);
    res.json(rows);
};

// exports.getStudents = async () => {
//     const [rows] = await pool.query('SELECT * FROM students');
//     res.json(rows);
// };

// exports.addStudent = async (student) => {
//     const [rows] = await pool.query('INSERT INTO students SET ?', [student]);
//     res.json(rows);
// };

// exports.updateStudent = async (student) => {
//     const [rows] = await pool.query('UPDATE students SET ? WHERE cid = ?', [student, student.cid]);
//     res.json(rows);
// };

// exports.deleteStudent = async (id) => {
//     const [rows] = await pool.query('DELETE FROM students WHERE cid = ?', [id]);
//     res.json(rows);
// };