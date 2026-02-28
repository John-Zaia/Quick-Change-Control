import { pool } from "../config/supabase";

export async function testQuery(test: string)
{
    const result = await pool.query(
       "INSERT INTO change_requests (test) VALUES ($1) RETURNING *",
      [test]
    )

    return result.rows;
}