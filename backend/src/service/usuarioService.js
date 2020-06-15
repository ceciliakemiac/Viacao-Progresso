const knex = require('../database/connection');
const { create } = require('lodash');

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
  }
}
