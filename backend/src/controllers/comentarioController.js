const comentarioService = require('../service/comentarioService');

module.exports = {
  async create(req, res) {
    const { comentario, usuario_id, destino_id } = req.body;

    try {
      const { comentario_id, newComentario } = 
        await comentarioService.create(comentario, usuario_id, destino_id);
    
      return res.status(200).json({
        id: comentario_id,
        ...newComentario,
      })
    } catch(err) {
      return res.status(400).json({
				message: 'Erro ao adicionar comentário',
				erro: err,
			});
    }
  },
}
