const pool = require('../config/db');

exports.requestDocument = async (req, res) => {
    const { student_id, document_type } = req.body;
    await pool.query('INSERT INTO document_requests (student_id, document_type) VALUES (?, ?)', [student_id, document_type]);
    res.status(201).json({ message: 'Document requested successfully' });
};

exports.getStatus = async (req, res) => {
    const { studentId } = req.params;
    const [status] = await pool.query('SELECT * FROM document_requests WHERE student_id = ?', [studentId]);
    res.json(status);
};

exports.getPendingRequests = async (req, res) => {
    const [requests] = await pool.query('SELECT * FROM document_requests WHERE status = ?', ['Pending']);
    res.json(requests);
};

exports.processRequest = async (req, res) => {
    const { requestId } = req.params;
    const { status, scheduled_date } = req.body;
    await pool.query('UPDATE document_requests SET status = ?, scheduled_date = ? WHERE id = ?', [status, scheduled_date, requestId]);
    res.json({ message: 'Request processed successfully' });
};

exports.verifyPayment = async (req, res) => {
    const { payment_id } = req.body;
    await pool.query('UPDATE payments SET verified = 1 WHERE id =?', [payment_id]);
    res.json({ message: 'Payment verified successfully' });
};

exports.getPaymentStatus = async (req, res) => {
    const { studentId } = req.params;
    const [status] = await pool.query('SELECT * FROM payments WHERE student_id =?', [studentId]);
    res.json(status);
};

exports.getNotifications = async (req, res) => {
    const { role } = req.params;
    const [notifications] = await pool.query('SELECT * FROM notifications WHERE role =?', [role]);
    res.json(notifications);
};

exports.sendNotification = async (req, res) => {
    const { role, message } = req.body;
    await pool.query('INSERT INTO notifications (role, message) VALUES (?,?)', [role, message]);
    res.status(201).json({ message: 'Notification sent successfully' });
    res.json({ message: 'Notification sent successfully' });
}