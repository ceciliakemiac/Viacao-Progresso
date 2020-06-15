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
      const insertedIds = await knex('comentarios').insert(newComentario);
      const comentario_id = insertedIds[0];
      
      return { comentario_id, newComentario };
    } catch(err) {
      throw err;
    }
  },

  async delete(id) {
    if(!id) throw new Error('Id não fornecido');

    try {
      const deleted = knex('comentarios')
                        .where('id', id)
                        .del();

      return deleted;      
    } catch(err) {
      throw err;
    }
  },

}
