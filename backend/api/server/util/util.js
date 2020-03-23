const jwt = require('jsonwebtoken')

module.exports = {
    generateToken(userID) {
        const token = jwt.sign({id: userID}, 'supersecret');
        return token;
    }
}
