import { Button, Dialog, DialogActions, DialogTitle, Divider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export const ModalVenta = ({ open, handleModal }) => {

    const [factura, setFactura] = useState({
        numero: '',
        fechaEmision: '',
        tipoVenta: '',
        libreria: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('asd')
        console.log(factura)
    }

    const handleChange = (e) => {
        const obj = {
            ...factura,
            [e.target.name]: e.target.value
        }
        setFactura(obj)
    }

    return (
        <Dialog
            onClose={handleModal}
            open={open}
        >
            <DialogTitle >Ingresar nueva Factura</DialogTitle>
            <Divider />
            <Box sx={{ p: 3, mx: 5, width: '300px', display: 'flex', justifyContent: 'center' }}>
                <Box component='form' onSubmit={handleSubmit}>

                    <Box>
                        <Typography> N° Factura: </Typography>
                        <TextField size='small' name='numero' onChange={handleChange} value={factura.numero} />
                    </Box>
                    <Box>
                        <Typography> Fecha de Emision: </Typography>
                        <TextField type='date' size='small' name='fechaEmision' onChange={handleChange} value={factura.fechaEmision}  />
                    </Box>
                    <Box>
                        <Typography> Tipo Venta: </Typography>
                        <TextField size='small' name='tipoVenta' onChange={handleChange} value={factura.tipoVenta} />
                    </Box>
                    <Box>
                        <Typography> Libreria: </Typography>
                        <TextField size='small' name='libreria' onChange={handleChange} value={factura.libreria} />
                    </Box>
                    <DialogActions sx={{ p: 3 }}>
                        <Button variant='contained' color='error' onClick={handleModal}>Cerrar</Button>
                        <Button type='submit' variant='contained'>Crear</Button>
                    </DialogActions>
                </Box>
            </Box>
        </Dialog>
    )
}
