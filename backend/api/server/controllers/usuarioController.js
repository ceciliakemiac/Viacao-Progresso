const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./api/server/services/usuarioData.json'));

module.exports = {
    getAll(req, res) {
        try {
            return res.status(200).json({data: data});
        } catch(error) {
            return res.status(400).json({erro: error.message});
        }
    },

    get(req, res) {
        const id = req.params.id;
        if(!Number(id)) {
            return res.status(400).json({message: 'Informe um valor numérico'});
        }
        try {
            const user = data.usuarios[id - 1];
            if(!user) {
                return res.status(404).json({message: 'Não foi possível achar o usuário'});
            } else {
                return res.status(200).json({data: user});
            }
        } catch(error) {
            return res.status(400).json({erro: error.message});
        }
    },

    post(req, res) {
        const {nome, senha} = req.body;
        if (data.usuarios.find(elem => elem.nome === nome) != undefined) {
            return res.status(400).json({message: 'Usuário já cadastrado'});
        }
        
        const newUser = {
            id: data.usuarios.length + 1,
            nome: nome,
            senha: senha,
            status: '',
            ondeFui: [],
            ondeNãoVou: [],
            listas: [],
            viagens: []
        }

        try {
            data.usuarios.push(newUser);
            fs.writeFileSync('./api/server/services/usuarioData.json', JSON.stringify(data));

            return res.status(200).json({data: newUser});
        } catch(error) {
            return res.status(400).json({erro: error.message});
        }
    }
}
