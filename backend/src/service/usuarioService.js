const { getUsuarioDestinos, deleteDestino, getUsuarioDestino } = require('../controllers/usuarioController');
const knex = require('../database/connection');
const { update } = require('../database/connection');

module.exports = {
  async create(nome, email, senha) {
    if (!nome || !email || !senha) {
      throw new Error('Informações do usuário não fornecidas');
    }

    const newUsuario = {
      nome: nome,
      email: email,
      senha: senha,
    }

    try {
      const usuario = await knex('usuarios').returning('id').insert(newUsuario);

      return ({
        usuario: usuario[0],
      })
    } catch (err) {
      throw err;
    }
  },

  async addDestino(favorito, id, nome, imagem, usuario_id, nota) {
    if (!favorito) favorito = false;
    if (!usuario_id) throw new Error('Usuário não fornecido');
    if (!id) throw new Error('Destino não fornecido');

    if (!nota) nota = null;

    const destino = {
      favorito: favorito,
      destino_id: id,
      nome: nome,
      imagem: imagem,
      usuario_id: usuario_id,
      nota: nota,
    }

    try {
      //CONFERIR SE ESTÁ EM QUEROIR PARA DELETAR
      const trx = await knex.transaction();
      const queroir = await trx('queroir_destinos_usuario')
        .where({ usuario_id: usuario_id, destino_id: id })
        .select('id');
      if (queroir.length != 0) {
        const id = queroir[0].id;

        await trx('queroir_destinos_usuario')
          .where('id', id)
          .del();
      }

      const ondefui = await trx('ondefui_destinos_usuario')
        .returning('id')
        .insert(destino);

      if (!ondefui) {
        await trx.rollback();
        throw new Error('Não foi possível adicionar destino');
      }
      await trx.commit();
      const ondefui_id = ondefui[0];

      return ({
        id: ondefui_id,
        destino: destino,
      });
    } catch (err) {
      throw new Error('Não foi possível adicionar destino');
    }
  },

  async deleteDestino(destino_id, usuario_id) {
    if (!destino_id || !usuario_id) throw new Error('Destino ou Usuário não fornecidos');

    try {
      const deleted = await knex('ondefui_destinos_usuario')
        .where({ usuario_id: usuario_id, destino_id: destino_id })
        .del()

      return ({
        deleted: deleted,
      });
    } catch (error) {
      throw error;
    }
  },

  async addWantedDestino(destino_id, usuario_id) {
    if (!destino_id || !usuario_id) {
      throw new Error('Dados não fornecidos');
    }

    const destino = {
      destino_id: destino_id,
      usuario_id: usuario_id,
    }

    try {
      //CONFERIR SE JÁ NÃO ESTÁ EM ONDEFUI
      const ondefui = await knex('ondefui_destinos_usuario')
        .where({ usuario_id: usuario_id, destino_id: destino_id })
        .select('id');
      if (!ondefui || ondefui.length != 0) {
        throw new Error('Destino já visitado');
      }

      const retorno = await knex('queroir_destinos_usuario')
        .returning('id')
        .insert(destino);
      const queroir_id = retorno[0];

      return ({
        id: queroir_id,
        destino: destino,
      });
    } catch (err) {
      throw err;
    }
  },

  async userUpdatedNotaDestino(usuario_id, destino_id) {
    if (!destino_id || !usuario_id) {
      throw new Error('Usuário ou destino não fornecidos');
    }

    try {
      const notas = await knex('ondefui_destinos_usuario')
        .where({ usuario_id: usuario_id, destino_id: destino_id })
        .select('nota');
      const nota = notas[0].nota;

      let updated = true;
      if (!nota) updated = false;

      return updated;
    } catch (err) {
      throw new Error('Erro ao descobrir se usuário já avaliou ou não o destino');
    }
  },

  async getUsuarioDestinos(usuario_id, tipo, orderBy) {
    if (!usuario_id) {
      throw new Error('Usuário não fornecido');
    }
    if (!tipo) tipo = 1;
    if (!orderBy) orderBy = 'nome';
    orderBy = 'destinos.' + orderBy;

    console.log("USUARIO ID " + usuario_id + " TIPO " + tipo + " ORDERBY " + orderBy)
    try {
      const destinos = await knex('ondefui_destinos_usuario')
        .join('destinos', 'ondefui_destinos_usuario.destino_id', '=', 'destinos.id')
        .select()
        .where('tipo', tipo)
        .where('usuario_id', usuario_id)
        .orderBy(orderBy)
      // .where({ usuario_id: usuario_id, 'destinos.tipo': tipo })
      // .orderBy(orderBy)

      return destinos;
    } catch (err) {
      throw new Error('Erro ao pegar os destinos já visitados pelo usuário');
    }
  },

  async getUsuarioDestino(destino_id, usuario_id) {
    if (!destino_id || !usuario_id) throw new Error('Usuário ou destino não fornecidos');

    try {
      const destino = await knex('ondefui_destinos_usuario')
        .where({ usuario_id: usuario_id, destino_id: destino_id })
        .select()

      console.log(destino.length);
      return destino.length == 1;
    } catch (error) {
      throw new Error('Erro ao verificar se usuário já viajou para o destino');
    }
  }

}
