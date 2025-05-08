import { Pool } from "pg";
import { getSecret } from "./gcloud/secrets.js";

export async function connect() {
  const pool = new Pool({
    user: await getSecret("user"),
    host: await getSecret("host"),
    database: await getSecret("name"),
    password: await getSecret("password"),
    port: 5432,
  });
  console.log("Connected to DB.");
  return pool;
}

// async function runQuery(pool) {
//   const res = await pool.query("SELECT * FROM users WHERE id = $1", [1]);
//   console.log(res.rows);
// }

// runQuery().catch(console.error);
