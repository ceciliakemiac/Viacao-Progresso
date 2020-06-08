const knex = require('knex');
const path = require('path');

module.exports = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'vp.sqlite'),
  },
  useNullAsDefault: true
});
