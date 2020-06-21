const knex = require('../database/connection');

module.exports = {
  async create(nome, email, senha) {
    if(!nome || !email || !senha) {
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
    } catch(err) {
      throw err;
    }
  },

  async addDestino(favorito, destino_id, usuario_id) {
    if(!favorito) favorito = false;
    if(!usuario_id) throw new Error('Usuário não fornecido');
    if(!destino_id) throw new Error('Destino não fornecido');

    const destino = {
      favorito: favorito,
      destino_id: destino_id,
      usuario_id: usuario_id,
    }

    try{
      //CONFERIR SE ESTÁ EM QUEROIR PARA DELETAR
      const retorno = await knex('ondefui_destinos_usuario')
                              .returning('id')
                              .insert(destino);
      const destino_id = retorno[0];

      return ({
        id: destino_id,
        destino: destino,
      });
    } catch(err) {
      throw err;
    }
  },

  async addWantedDestino(destino_id, usuario_id) {
    if(!destino_id || !usuario_id) {
      throw new Error('Dados não fornecidos');
    }
    
    const destino = {
      destino_id: destino_id,
      usuario_id: usuario_id,
    }

    try {
      //CONFERIR SE JÁ NÃO ESTÁ EM ONDEFUI
      const retorno = await knex('queroir_destinos_usuario')
                              .returning('id')
                              .insert(destino);
      const destino_id = retorno[0];

      return ({
        id: destino_id,
        destino: destino,
      });
    } catch(err) {
      throw err;
    }
  }
}
