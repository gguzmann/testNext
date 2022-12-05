import { FaceRetouchingNatural } from '@mui/icons-material'
import { Button, Divider, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const ventas = ({ data }) => {
  const [facturas, setFacturas] = useState(data.filter((x, i) => i < 9))
  const [page, setPage] = useState(1)

  const handleChange = (e) => {
    console.log(e.target.value)
    setFacturas(data.filter(x => x.libreria.includes(e.target.value) || x.id == e.target.value))
  }


  const handlePrevious = () => {
    console.log('previous')
    let pag = page
    setPage(page - 1)
    setFacturas(data.filter((x,i) => i < pag * 10 && i > (pag * 10) - 10))
  }
  const handleNext = () => {
    let pag = page
    setPage(page + 1)
    setFacturas(data.filter((x,i) => i < pag * 10 && i > (pag * 10) - 10))

    console.log('next')
  }

  return (
    <>
      <h1>Ventas</h1>
      <TextField id="outlined-basic" variant="outlined" onChange={handleChange} />
      <Divider />


      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>N Factura</TableCell>
              <TableCell>Libreria</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Emitida</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facturas.map(x => (
              <TableRow key={x.id}>
                <TableCell>{x.id}</TableCell>
                <TableCell>{x.libreria}</TableCell>
                <TableCell>{x.tipo}</TableCell>
                <TableCell>{x.fechaEmision}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handlePrevious}>prevous</Button>
      <Button onClick={handleNext}>next</Button>
    </>
  )
}

export const getStaticProps = async (context) => {
  const response = await fetch('https://test-next-gilt.vercel.app/api/facturas')
  const data = await response.json()
  return {
    props: {
      data: data
    }
  }
}

export default ventas