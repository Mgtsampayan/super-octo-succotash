const pool = require('../config/db');

exports.verifyPayment = async (req, res) => {
    const { payment_id } = req.body;
    await pool.query('UPDATE payments SET verified = 1 WHERE id = ?', [payment_id]);
    res.json({ message: 'Payment verified successfully' });
};
