import pool from "../config/db.js";

export async function createStudent(data) {
  const query = `
    INSERT INTO students (full_name, gender, birth_date, phone, address)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    data.full_name,
    data.gender,
    data.birth_date || null,
    data.phone || null,
    data.address || null,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}
