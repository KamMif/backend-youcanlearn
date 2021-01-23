import database from 'pg';

const Pool = database.Pool;
export const connections = new Pool({
  user: 'youcanlearn',
  host: 'localhost',
  database: 'youcanlearndb',
  password: '9191420152',
  port: 5432
});