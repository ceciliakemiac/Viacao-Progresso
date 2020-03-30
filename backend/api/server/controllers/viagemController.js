const fs = require('fs');

const dataUsuario = JSON.parse(fs.readFileSync('./api/server/services/usuarioData.json'));
const dataDestino = JSON.parse(fs.readFileSync('./api/server/services/destinoData.json'));

module.exports = {
    post(req, res) {
        const userId = req.user.id;
        const {nomeDestino, dataIda, dataVolta} = req.body;

        const destino = dataDestino.destinos.find(elem => elem.nome == nomeDestino);
        if(!destino) {
            return res.status(404).json({message: 'Destino não encontrado!'});
        }

        const novaViagem = {
            idDestino: destino.id,
            dataIda: dataIda,
            dataVolta: dataVolta
        }

        try {
            dataUsuario.usuarios[userId - 1].viagens.push(novaViagem);
            fs.writeFileSync('./api/server/services/usuarioData.json', JSON.stringify(dataUsuario));

            return res.status(200).json({data: dataUsuario});
        } catch(error) {
            return res.status(400).json({erro: error.message});
        }
    }
}