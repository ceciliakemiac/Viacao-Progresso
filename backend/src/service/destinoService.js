const knex = require('../database/connection');
const usuarioService = require('./usuarioService');

async function getNotaNovaAndTotalNotas(destino_id, nota) {
  const retorno = await knex('destinos')
    .where('id', destino_id)
    .select('numNotas', 'nota');

  const soma = retorno[0].nota * retorno[0].numNotas + nota;

  const totalNotas = retorno[0].numNotas + 1;
  const notaNova = soma / totalNotas;

  return ({
    totalNotas: totalNotas,
    notaNova: notaNova,
  });
}

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
    } catch (err) {
      throw err;
    }
  },

  async getDestinosPopulares() {
    try {
      const destinos = await knex('destinos')
        .limit(4)
      return destinos;
    } catch (err) {
      throw err;
    }
  },

  async getDestino(id) {
    if (!id) throw new Error('Id não fornecido');

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
    } catch (err) {
      throw err;
    }
  },

  async updateNota(nota, id, usuario_id) {
    if (!nota) throw new Error('Nota não fornecida!');
    if (!id) throw new Error('Id não fornecido!');
    if (!usuario_id) throw new Error('Usuário não fornecido');

    try {
      const userRatedDestino = await usuarioService.userUpdatedNotaDestino(usuario_id, id);
      if (userRatedDestino) throw new Error('Usuário já avaliou esse destino');

      const { totalNotas, notaNova } = await getNotaNovaAndTotalNotas(id, nota);

      const trx = await knex.transaction();
      await trx('ondefui_destinos_usuario')
        .where({ usuario_id: usuario_id, destino_id: id })
        .update({ nota: nota });

      const novoDestinoRetorno = await trx('destinos')
        .where({ id: id })
        .update({ nota: notaNova, numNotas: totalNotas }, ['id', 'nome', 'nota']);
      if (!novoDestinoRetorno) {
        await trx.rollback();
        throw new Error('Não foi possível atualizar a nota');
      }
      await trx.commit();
      const novoDestino = novoDestinoRetorno[0];

      return ({
        destino: novoDestino,
      })
    } catch (err) {
      throw err;
    }
  }
};
