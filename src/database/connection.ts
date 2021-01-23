import database from 'pg';

const Pool = database.Pool;
export const connections = new Pool({
  user: 'doadmin',
  host: 'youcanlearndb-do-user-8574408-0.b.db.ondigitalocean.com',
  database: 'youcanlearndb',
  password: 'e6l04e1g5lyeozjt',
  port: 25060,
  ssl: true
});
