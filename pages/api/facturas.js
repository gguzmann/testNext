// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { pool } from "../../config/db"

export default async function getAllFacturas(req, res) {
  const [rows] = await pool.query('SELECT * FROM facturas limit 100')
  res.status(200).json(rows)

}