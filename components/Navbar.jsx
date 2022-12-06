import { AppBar, Button, Divider, Drawer, List, ListItem, Paper, Toolbar, Box, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [select, setSelect] = useState('Home')

  const styleLink = {
    textDecoration: 'none',
    p: 1,
    flexGrow: 1, 
    px: 3, 
    "&:hover": 
    { fontWeight: 'bold',  borderLeft: 3 }

  }

  return (
    <Box >
      <Paper elevation={2} sx={{ height: '100vh' }}>

        <List sx={{ width: '230px' }}>
          <ListItem>
            <img src="http://52.15.115.118/assets/img/ceibo.png" width='150' height='150' alt="qatar2022" sx={{ p: 1 }} />
          </ListItem>
          <Divider />
          <ListItem><Typography color='primary' onClick={(e) => {console.log(e.target.outerText)}} sx={styleLink} component={Link} href='/'>Home</Typography></ListItem>
          <ListItem><Typography color='primary' sx={styleLink} component={Link} href='/ventas'>Ventas</Typography></ListItem>
          <ListItem><Typography color='primary' sx={styleLink} component={Link} href='/consignados'>Compras</Typography></ListItem>
          <ListItem><Typography color='primary' sx={styleLink} component={Link} href='/'>Consignados</Typography></ListItem>
          <ListItem><Typography color='primary' sx={styleLink} component={Link} href='/'>Stock</Typography></ListItem>
          <ListItem><Typography color='primary' sx={styleLink} component={Link} href='/'>Detalle</Typography></ListItem>
          <Divider />
          <ListItem><Typography color='primary' sx={styleLink} component={Link} href='/'>Libros</Typography></ListItem>
          <ListItem><Typography color='primary' sx={styleLink} component={Link} href='/'>Librerias</Typography></ListItem>
          <ListItem><Typography color='primary' sx={styleLink} component={Link} href='/'>Proovedores</Typography></ListItem>
          <ListItem><Typography color='error' sx={styleLink} component={Link} href='/'>Cerrar Sesion</Typography></ListItem>

        </List>
      </Paper>


    </Box>
  )
}
