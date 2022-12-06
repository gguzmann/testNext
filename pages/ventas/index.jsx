import { FaceRetouchingNatural } from '@mui/icons-material'
import { Box, Button, Divider, InputLabel, Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ModalVenta } from '../../components/ModalVenta'

const ventas = ({ data }) => {
  const [facturas, setFacturas] = useState(data.filter((x, i) => i <= 9))
  const [page, setPage] = useState(1)
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleChange = (e) => {
    setFacturas(data.filter(x => x.libreria.includes(e.target.value) || x.codigo.includes(e.target.value)))
  }

  const paginationChange = (e, p) => {
    setFacturas(data.filter((x, i) => i >= (p * 10) - 10 && i < (p * 10)))
  }

  const router = useRouter()
  const handleClick = (id) => {
    router.push(`/ventas/${id}`)
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1>Ventas</h1>
        <TextField size='small' variant="outlined" onChange={handleChange} label='Buscar' />
        <Button variant='contained' onClick={handleModal}>Nueva Factura</Button>
      </Box>
      <Divider sx={{mb:5 }} />
      <ModalVenta open={openModal} handleModal={handleModal} />

      <TableContainer sx={{ height: '70%'}}>
        <Table stickyHeader size="small">
          <TableHead sx={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}>
            <TableRow >
              <TableCell><Typography sx={{fontWeight:'bold'}}> N Factura</Typography></TableCell>
              <TableCell>Libreria</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Emitida</TableCell>
              <TableCell>Accion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facturas.map(x => (
              <TableRow  key={x.id} hover>
                <TableCell>{x.id}</TableCell>
                <TableCell>{x.libreria}</TableCell>
                <TableCell>{x.tipoVenta}</TableCell>
                <TableCell>{x.fechaEmision}</TableCell>
                <TableCell><Button onClick={() => handleClick(x.id)} variant='outlined'>Ver mas</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination onChange={paginationChange} count={Math.ceil(data.length / 10)} />
      </Box>

    </>
  )
}

export const getStaticProps = async (context) => {
  console.log(context.params)
  const response = await fetch('http://localhost:3000/api/facturas')
  const data = await response.json()
  return {
    props: {
      data: data
    }
  }
}

export default ventas