// const jwt = require('jsonwebtoken')
const userCtrl = require('./usuarioController');
const usuarios = require('../services/usuarioData');
const utils = require('../util/util');

// function generateToken(userID) {
//     const token = jwt.sign({id: userID}, 'supersecret');
//     return token;
// }

module.exports = {
    login(req, res) {
        const {nome, senha} = req.body;
        let usuario = {"id": 0, "nome": '', "senha": ''}
        
        for (let user of usuarios) {
            console.log(user.nome + " " + nome);
            if (user.nome === nome) {
                console.log(user.nome);
                usuario = user;
                break;
            }
        }
        console.log(usuario);
        
        const validPassword = usuario.senha === senha;
        if(!validPassword) return res.status(400).send('Senha inválida.');
        
        const token = utils.generateToken(usuario.id);
        res.header('x-auth-token', token).send(usuario);
    }
}
