const jwt = require('jsonwebtoken');

const SECRET = 'your_jwt_secret_key';

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    SECRET,
    { expiresIn: '7d' }
  );
};

exports.verifyToken = (token) => jwt.verify(token, SECRET);
