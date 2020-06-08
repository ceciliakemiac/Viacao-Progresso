const knex = require('knex');

module.exports = {
  async up(knex) {
    return knex.schema.createTable('destinos', table => {
      table.increments('id').primary();
      table.text('descricao').notNullable();
      table.float('nota');
      table.float('periculosidade');
      table.float('distanciaTerra');
      table.boolean('temETs').notNullable();
      table.string('image1').notNullable();
      table.string('image2');
      table.string('image3');
      table.string('image4');
      table.string('nome').notNullable();
      table.string('tipo').references('tipos.tipo');
    }).createTable('tipos', table => {
      table.increments('id').primary();
      table.string('tipo').notNullable();
    })
  },

  async down(knex) {
    return knex.schema
      .dropTable('destinos')
      .dropTable('tipos')
  }
}
