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
      const insertedIds = await knex('comentarios').returning('id').insert(newComentario);
      const comentario_id = insertedIds[0];
      
      return { comentario_id, newComentario };
    } catch(err) {
      throw err;
    }
  },

  async delete(id, usuario_id) {
    if(!id || !usuario_id) throw new Error('Id ou Usuário não fornecido');

    try {
      const retorno = await knex('comentarios').where('id', id);
      const comentario = retorno[0];

      if(comentario.usuario_id !== usuario_id) {
        throw new Error('Usuário não pode deletar esse comentário');
      }

      const deleted = await knex('comentarios')
                             .where('id', id)
                             .del();

      return ({
        deleted: deleted,
      })     
    } catch(err) {
      throw err;
    }
  },

}
