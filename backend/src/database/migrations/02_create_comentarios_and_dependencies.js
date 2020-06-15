const knex = require('knex');

module.exports = {
  async up(knex) {
    return knex.schema.createTable('comentarios', table => {
      table.increments('id').primary();
      table.text('comentario').notNullable();
      table.timestamps();
      table.integer('usuario_id').references('usuarios.id');
      table.integer('destino_id').references('destinos.id');
    })
  },

  async down(knex) {
    return knex.schema
      .dropTable('comentarios')
      .dropTable('destino_comentarios')
  }
}
