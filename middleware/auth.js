/*MIDDLEWARE FOR PRIVATE ROUTES*/
require('dotenv').config();
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  //Check for jsonwebtoken
  if(!token) {
    res.status(401).json({ message: 'No token, authorization denied' })
  }

  try{
    //Verify token
    const decoded = jwt.verify(token, SECRET);
    //Add user from payload
    req.user = decoded;
    next();
  }catch(error){
    res.status(400).json({message: 'Token is not valid'});
  }
}

module.exports = auth;
