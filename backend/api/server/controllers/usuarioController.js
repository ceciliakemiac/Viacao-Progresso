const jwt = require('jsonwebtoken')
const usuarios = require('../services/usuarioService');
const utils = require('../util/util');

module.exports = {
    getAll(req, res) {
        try {
            const todosUsuarios = usuarios;
            return res.status(200).json({
                message: 'Usuários aqui',
                data: todosUsuarios
            });
        } catch(error) {
            return res.status(400).json({message: error.message});
        }
    },

    get(req, res) {
        const id = req.params.id;
        if(!Number(id)) {
            return res.status(400).json({message: 'Please input a valid numeric value!'});
        }
        try {
            const user = usuarios[id - 1];
            if(!user) {
                return res.status(404).json({message: 'Cannot find the user!'});
            } else {
                return res.status(200).json({data: user});
            }
        } catch(error) {
            return res.status(400).json({erro: error});
        }
    },

    post(req, res) {
        const {nome, senha} = req.body;
        if (usuarios.find(elem => elem.nome === nome) == undefined) {
            return res.status(400).json({message: 'Usuário já cadastrado'});
        }
        
        const newUser = {
            id: usuarios.length + 1,
            nome: nome,
            senha: senha
        }

        try {
            usuarios.push(newUser);
            const token = utils.generateToken(usuarios.length);

            return res.header('x-auth-token', token).send(newUser);
        } catch(error) {
            return res.status(400).json({message: error.message});
        }
    }
}
