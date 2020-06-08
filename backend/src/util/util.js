const jwt = require('jsonwebtoken')
const fs = require('fs');

module.exports = {
    generateToken(userID) {
        const token = jwt.sign({id: userID}, 'supersecret');
        return token;
    },

    base64Encode(file) {
        const bitmap = fs.readFileSync(file);
        return new Buffer(bitmap).toString('base64');
    },

    base64Decode(base64str, file) {
        const bitmap = new Buffer(base64str, 'base64');
        fs.writeFileSync(file, bitmap);
    }
}
