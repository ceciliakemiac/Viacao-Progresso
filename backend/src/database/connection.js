const knex = require('knex');

module.exports = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5434',
    user: 'viacao_user',
    password: 'viacao_password',
    database: 'viacao_progresso',
  },
  useNullAsDefault: true
});
