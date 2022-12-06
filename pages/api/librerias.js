import { pool } from "../../config/db"

export default async function getAllLibrerias(req, res) {
    const params = req.query
    console.log(params)
  const [rows] = await pool.query('SELECT id,nombre FROM librerias')
  res.status(200).json(rows)

}
