const comentarioService = require('../service/comentarioService');

module.exports = {
  async create(req, res) {
    const { comentario, destino_id } = req.body;
    const usuario_id = req.user.id;

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

  async delete(req, res) {
    const { id } = req.params;
    const usuario_id = req.user.id;

    try {
      const deleted = await comentarioService.delete(id, usuario_id);

      return res.status(200).json({
        deleted: deleted,
      })
    } catch(err) {
      return res.status(400).json({
        message: err.message,
        erro: err,
      })
    }
  },
  
}
