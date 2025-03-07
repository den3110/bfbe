const jwt = require('jsonwebtoken');

function authenticateJWTCheckout(req, res, next) {
    const authHeader = req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return  next();
    }
  
    const token = authHeader.substring(7); // Loại bỏ tiền tố 'Bearer ' để chỉ lấy token
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return  next();

      }
  
      req.user = user;
      return  next();
    });
  }
  
export default authenticateJWTCheckout