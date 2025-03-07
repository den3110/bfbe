const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    const authHeader = req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Missing or invalid token. Authentication failed.' });
    }
  
    const token = authHeader.substring(7); // Loại bỏ tiền tố 'Bearer ' để chỉ lấy token
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token. Authentication failed.' });
      }
  
      req.user = user;
      next();
    });
  }
  
export default authenticateJWT