import * as pg from "pg";

interface InsertQuery {
  text: string;
  values: any[];
}

// connect to database
const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// helper function for read operation
export async function get(query: string): Promise<any> {
  const res = await pool.query(query);
  return res.rows;
}

// helper function for write operation
export async function mutate(query: InsertQuery): Promise<any> {
  const res = await pool.query(query);
  console.log("res", res);
  return res.rowCount;
}
