// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { pool } from "../../../config/db"

export default async function getAllFacturas(req, res) {
  const [rows] = await pool.query("SELECT f.id, f.tipoVenta, f.codigo, f.fechaEmision, f.fechaPago, f.total, l.nombre, ifnull(datediff(f.fechaPago, f.fechaEmision), datediff(curdate(), f.fechaEmision)) as atraso, f.libreria FROM facturas f inner join librerias l on f.libreria_id = l.id where tipo = 'venta' order by f.fechaPago, atraso, id desc")
  res.status(200).json(rows)
}
