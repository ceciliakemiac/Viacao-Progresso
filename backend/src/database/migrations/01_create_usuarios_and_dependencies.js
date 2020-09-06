const knex = require('knex');

module.exports = {
  async up(knex) {
    return knex.schema.createTable('usuarios', table => {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('nome').unique().notNullable();
      table.string('senha').notNullable();
      table.timestamps().defaultTo(knex.fn.now());
    }).createTable('ondefui_destinos_usuario', table => {
      table.increments('id').primary();
      table.boolean('favorito').notNullable();
      table.float('nota');
      table.integer('usuario_id').references('usuarios.id');
      table.integer('destino_id').references('destinos.id');
    }).createTable('queroir_destinos_usuario', table => {
      table.increments('id').primary();
      table.integer('usuario_id').references('usuarios.id');
      table.integer('destino_id').references('destinos.id');
    }).alterTable('ondefui_destinos_usuario', table => {
      table.unique(['usuario_id', 'destino_id']);
    }).alterTable('queroir_destinos_usuario', table => {
      table.unique(['usuario_id', 'destino_id']);
    })
  },

  async down(knex) {
    return knex.schema
      .dropTable('ondefui_destinos_usuario')
      .dropTable('queroir_destinos_usuario')
      .dropTable('usuarios')
  }
}
