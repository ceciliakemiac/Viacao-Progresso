const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./api/server/services/destinoData.json'));

module.exports = {
    getAll(req, res) {
        try {
            return res.status(200).json({data: data});
        } catch(error) {
            return res.status(400).json({message: error.message});
        }
    },

    get(req, res) {
        const id = req.params.id;
        if(!Number(id)) {
            return res.status(400).json({message: 'Informe um valor numérico'});
        }
        try {
            const destino = data.destinos[id - 1];
            if(!destino) {
                return res.status(404).json({message: 'Não foi possível achar o destino!'});
            } else {
                return res.status(200).json({data: destino});
            }
        } catch(error) {
            return res.status(400).json({erro: error.message});
        }
    },

    update(req, res) {
        const id = req.params.id;
        const userId = req.user.id;
        const {tipo, nota, comentario} = req.body;
        if(!Number(id)) {
            return res.status(400).json({message: 'Informe um valor numérico'});
        }

        const destinoToUpdate = data.destinos[id - 1];
        const destino = getDestino(tipo, nota, comentario, destinoToUpdate, userId);

        try {
            data.destinos[id - 1] = destino;
            fs.writeFileSync('./api/server/services/destinoData.json', JSON.stringify(data));
            
            return res.status(200).json({data: data});
        } catch(error) {
            return res.status(400).json({erro: error.message});
        }
    }
}

function adicionaComentario(comentario, destinoToUpdate, userId) {
    if(comentario) {
        const novoComentario = {
            idUsuario: userId,
            comentario: comentario
        }
        data.destinos[destinoToUpdate.id - 1].comentarios.push(novoComentario);
    }
    return destinoToUpdate.comentarios;
}

function getDestino(tipo, nota, comentario, destinoToUpdate, userId) {
    const destino = {
        id: destinoToUpdate.id,
        nome: destinoToUpdate.nome,
        imagem: destinoToUpdate.imagem,
        imagens: destinoToUpdate.imagens,
        tipo: tipo || destinoToUpdate.tipo,
        nota: nota || destinoToUpdate.nota,
        descricao: destinoToUpdate.descricao,
        distanciaTerra: destinoToUpdate.distanciaTerra,
        periculosidade: destinoToUpdate.periculosidade,
        temETs: destinoToUpdate.temETs,
        comentarios: adicionaComentario(comentario, destinoToUpdate, userId)
    }
    return destino;
}
