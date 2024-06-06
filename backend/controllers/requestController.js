const db = require('../utils/db');

exports.createRequest = (req, res) => {
    const { userId } = req;
    const { requestType, details } = req.body;
    const query = 'INSERT INTO requests (student_id, requestType, details) VALUES (?, ?, ?)';
    db.execute(query, [userId, requestType, details], (err, result) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'Request created successfully' });
    });
};

exports.getRequests = (req, res) => {
    const { userId } = req;
    const query = 'SELECT * FROM requests WHERE student_id = ?';
    db.execute(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json(results);
    });
};