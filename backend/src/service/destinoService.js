const knex = require('../database/connection');

module.exports = {
  async getPorTipo(tipo) {
    try {
      const destinos = await knex('destinos')
                              .where('tipo', tipo)
                              .select();
      return destinos;
    } catch(err) {
      throw err;
    }
  },
}
