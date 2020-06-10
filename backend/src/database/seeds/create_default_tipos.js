const knex = require('knex');

module.exports = {
  async seed(knex) {
    try {
      await knex('tipos').del();

      await knex('tipos').insert([
        {tipo: 'planeta'},
        {tipo: 'estrela'},
        {tipo: 'constelação'},
        {tipo: 'galáxia'},
        {tipo: 'buraco-negro'},
        {tipo: 'perdido-no-tempo'}
      ]);
    } catch(err) {
      console.error(err);
    }
  }
}