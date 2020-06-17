const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Acesso negado. Token não fornecido.');

    try {
        const decoded = jwt.verify(token, 'supersecret');
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Token inválido.');
    }
}

module.exports = auth;
