const db = require('../utils/db');
const { hashPassword, comparePassword } = require('../utils/hashPassword');
const { generateToken } = require('../utils/jwtUtils');

exports.register = (req, res) => {
    const { studentcode, password, cpassword } = req.body;
    if (password !== cpassword) return res.status(400).json({ error: 'Passwords do not match' });

    const hashedPassword = hashPassword(password);
    const query = 'INSERT INTO students (studentcode, password) VALUES (?,?)';
    db.execute(query, [studentcode, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'User registered successfully' });
    });
};

exports.login = (req, res) => {
    const { studentcode, password } = req.body;
    const query = 'SELECT * FROM students WHERE studentcode = ?';
    db.execute(query, [studentcode], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0) return res.status(400).json({ error: 'User not found' });

        const user = results[0];
        const isPasswordValid = comparePassword(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ error: 'Invalid password' });

        const token = generateToken(user);
        res.status(200).json({ token });
    });
};

exports.logout = (req, res) => {
    // Handle logout if needed (usually done on the client-side by deleting the token)
    res.status(200).json({ message: 'Logged out successfully' });
};
