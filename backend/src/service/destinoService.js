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

  async updateNota(nota, id, usuario_id) {
    if(!nota) throw new Error('Nota não fornecida!');
    if(!id) throw new Error('Id não fornecido!');
    if(!usuario_id) throw new Error('Usuário não fornecido');

    try {
      let retorno = await knex('destinos')
                            .where('id', id)
                            .select('numNotas', 'nota');
      let numNotas = retorno[0].numNotas;
      const notaAntiga = retorno[0].nota;

      const soma = notaAntiga * numNotas + nota;

      numNotas = numNotas + 1;
      const notaNova = soma / numNotas;

      const trx = await knex.transaction();
      await trx('ondefui_destinos_usuario')
              .where({usuario_id: usuario_id, destino_id: id})
              .update({nota: notaNova});
      retorno = await trx('destinos')
                  .where({id: id})
                  .update({nota: notaNova, numNotas: numNotas}, ['id', 'nome', 'nota']);
      await trx.commit();
      const novoDestino = retorno[0];

      return ({
        destino: novoDestino,
      })
    } catch(err) {
      throw err;
    }
  }
}
