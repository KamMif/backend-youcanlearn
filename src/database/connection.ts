import database from 'pg';

const Pool = database.Pool;
export const connections = new Pool({
  user: 'youcanlearn',
  host: '165.227.170.11',
  database: 'youcanlearndb',
  password: '9191420152',
  ssl: true,
  port: 5432
});