const knex = require('knex');

module.exports = {
  async seed(knex) {
    try {
      await knex.schema.dropTable('tipos');
      await knex.schema.createTable('tipos', table => {
        table.increments('id').primary();
        table.string('tipo').notNullable();
      });

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