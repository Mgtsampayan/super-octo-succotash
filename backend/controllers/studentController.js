const db = require('../utils/db');

exports.getStudentProfile = (req, res) => {
    const { userId } = req;
    const query = 'SELECT * FROM students WHERE cid = ?';
    db.execute(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json(results[0]);
    });
};
