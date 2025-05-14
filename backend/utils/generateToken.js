const JWT = require('jsonwebtoken');

const generateToken= (id) =>{
    return JWT.sign({id},process.env.JWT_TOKEN,{ expiresIn:'1h'});
};

module.exports = generateToken;
