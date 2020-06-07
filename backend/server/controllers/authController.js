const fs = require('fs');
const userCtrl = require('./usuarioController');
const utils = require('../util/util');

const data = JSON.parse(fs.readFileSync('./server/data/usuarioData.json'));

module.exports = {
    login(req, res) {
        const {nome, senha} = req.body;
        let usuario = {"id": 0, "nome": '', "senha": ''}
        
        for (let user of data.usuarios) {
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
