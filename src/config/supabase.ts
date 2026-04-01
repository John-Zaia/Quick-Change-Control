import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export class Supabase {

  async saveChangeRequest(request: any) {
        
  const query = `
    INSERT INTO change_requests 
    ("title", "description", "risk", "caseNumber", "status", "email")
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [
    request.title,
    request.description,
    request.risk,
    request.caseNumber,
    request.status,
    request.requestEmail
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
  } 

  async getAllChangeRequests(){
      const query = 'SELECT * FROM change_requests'
      const result = await pool.query(query);

      return result.rows;
  }

  async approveRequest(id: string) {

  const query = `
    UPDATE change_requests
    SET "status" = 'Approved'
    WHERE "id" = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
} 
}


