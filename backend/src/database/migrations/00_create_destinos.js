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

// export async function up(knex) {
//   return knex.schema.createTable('destinos', table => {
//     table.increments('id').primary();
//     table.text('descricao').notNullable();
//     table.float('nota');
//     table.float('periculosidade');
//     table.float('distanciaTerra');
//     table.boolean('temETs').notNullable();
//     table.string('image1').notNullable();
//     table.string('image2');
//     table.string('image3');
//     table.string('image4');
//     table.string('nome').notNullable();
//     table.string('tipo').references('tipos.tipo');
//   }).createTable('tipos', table => {
//     table.increments('id').primary();
//     table.string('tipo').notNullable();
//   })
// }

// export async function down(knex) {
//   return knex.schema
//   .dropTable('destinos')
//   .dropTable('tipos')
// }

// export async function up(knex) {
//   return knex.schema.createTable('comentarios', table => {
//     table.increments('id').primary();
//     table.string('comentario').notNullable();
//     table.timestamp('created_at').defaultTo(knex.fn.now());
//     table.integer('usuario_id').references('usuarios.id');
//     table.integer('destino_id').references('destinos.id');
//   })
    
//   })
// }