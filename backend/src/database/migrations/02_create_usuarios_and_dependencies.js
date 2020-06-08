const knex = require('knex');

module.exports = {
  async up(knex) {
    return knex.schema.createTable('usuarios', table => {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('nome').unique().notNullable();
      table.string('senha').notNullable();
      table.timestamps();
    }).createTable('ondefui_destinos_usuario', table => {
      table.increments('id').primary();
      table.boolean('favorito').notNullable();
      table.integer('usuario_id').references('usuarios.id');
      table.integer('destino_id').references('destinos.id');
    }).createTable('queroir_destinos_usuario', table => {
      table.increments('id').primary();
      table.integer('usuario_id').references('usuarios.id');
      table.integer('destino_id').references('destinos.id');
    })
  },

  async down(knex) {
    return knex.schema
      .dropTable('usuarios')
      .dropTable('ondefui_destinos_usuario')
      .dropTable('queroir_destinos_usuario')
  }
}
