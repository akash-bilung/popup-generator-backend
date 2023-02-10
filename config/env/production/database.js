// path: ./config/env/production/database.js

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.PGHOST,
      port: config.PGPORT,
      database: config.PGDATABASE,
      user: config.PGUSER,
      password: config.PGPASSWORD,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
