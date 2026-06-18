import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Supabase's pooled connection requires SSL. The "rejectUnauthorized: false"
// is standard for Supabase since they use a managed cert chain that Node
// doesn't always validate cleanly through the pooler - this is the setting
// Supabase's own docs recommend for server-side connections.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle database client", err);
});

export default pool;
