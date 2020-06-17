const knex = require('../database/connection');

module.exports = {
  async getPorTipo(tipo, orderBy) {
    if (!tipo) tipo = 1;
    if (!orderBy) orderBy = 'nome'; 

    try {
      const destinos = await knex('destinos')
                              .where('tipo', tipo)
                              .orderBy(orderBy)
                              .select();
      return destinos
    } catch(err) {
      throw err;
    }
  },

  async getDestinosPopulares() {
    try {
      const destinos = await knex('destinos')
                              .limit(4)
      return destinos;
    } catch(err) {
      throw err;
    }
  },

  async getDestino(id) {
    if(!id) throw new Error('Id não fornecido');

    try {
      const destinos = await knex('destinos').where('id', id);
      const destino = destinos[0];

      const comentarios = await knex('comentarios')
                                  .where('destino_id', id)
                                  .select('id', 'comentario', 'usuario_id');
      
      const tipos = await knex('tipos').where('id', destino.tipo);
      const tipo = tipos[0];

      destino.tipo = tipo;
      
      return ({
        destino: destino,
        comentarios: comentarios,
      });
    } catch(err) {
      throw err;
    }
  },
}
