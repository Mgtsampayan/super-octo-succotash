const pool = require('../config/db');

exports.getNotifications = async (req, res) => {
    const { role } = req.params;
    const [notifications] = await pool.query('SELECT * FROM notifications WHERE role = ?', [role]);
    res.json(notifications);
};

exports.getPendingRequests = async (req, res) => {
    const [requests] = await pool.query('SELECT * FROM document_requests WHERE status =?', ['Pending']);
    res.json(requests);
};

exports.processRequest = async (req, res) => {
    const { requestId } = req.params;
    const { status, scheduled_date } = req.body;
    await pool.query('UPDATE document_requests SET status =?, scheduled_date =? WHERE id =?', [status, scheduled_date, requestId]);
    res.status(201).json({ message: 'Request processed successfully' });
}

exports.createRequest = async (req, res) => {
    const { student_id, document_type } = req.body;
    await pool.query('INSERT INTO document_requests (student_id, document_type) VALUES (?, ?)', [student_id, document_type]);
    res.status(201).json({ message: 'Request created successfully' });
};

exports.deleteRequest = async (req, res) => {
    const { requestId } = req.params;
    await pool.query('DELETE FROM document_requests WHERE id = ?', [requestId]);
    res.status(201).json({ message: 'Request deleted successfully' });
};

exports.getDocumentRequests = async (req, res) => {
    const [requests] = await pool.query('SELECT * FROM document_requests');
    res.json(requests);
};