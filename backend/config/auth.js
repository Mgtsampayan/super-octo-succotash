const jwt = require('jsonwebtoken');
require(dotenv).config();

const generateToken = (user) => {
    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

module.exports = generateToken;