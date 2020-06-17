const knex = require('../database/connection');

module.exports = {
  async login(email, senha) {
    if(!email || !senha) throw new Error('Email ou senha não fornecidos');

    try {
      const retorno = await knex('usuarios').where('email', email);
      const usuario = retorno[0];

      if(usuario.senha !== senha) {
        throw new Error('Senha incorreta');
      }

      return ({
        usuario: usuario,
      });
    } catch(err) {
      throw err;
    }
  }
}