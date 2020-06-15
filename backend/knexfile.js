const path = require('path');

module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5434',
    user: 'viacao_user',
    password: 'viacao_password',
    database: 'viacao_progresso',
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  }, 
  useNullAsDefault: true,
};
