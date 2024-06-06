const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

const generateToken = (user) => {
    return jwt.sign({ id: user.cid, studentcode: user.studentcode }, jwtSecret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    return jwt.verify(token, jwtSecret);
};

module.exports = { generateToken, verifyToken };
