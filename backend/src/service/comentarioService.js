const knex = require('../database/connection');

module.exports = {
  async create(comentario, usuario_id, destino_id) {
    if(!comentario || !usuario_id || !destino_id) {
      throw new Error('Faltando informações');
    }

    const newComentario = {
      comentario: comentario,
      usuario_id: usuario_id,
      destino_id: destino_id,
    };

    try {
      const insertedId = await knex('comentarios')
                                    .insert(newComentario);
      const comentario_id = insertedId[0];
      
      return { comentario_id, newComentario };
    } catch(err) {
      throw err;
    }
  }
}
