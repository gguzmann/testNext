import { AppBar, Button, Divider, Drawer, List, ListItem, Paper, Toolbar, Box } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [test, setTest] = useState('second')
  const handleMenu = () => setOpenMenu(!openMenu)
  return (
    <Box >




      <Drawer
        anchor='right'
        onMouseEnter={handleMenu}
        onMouseLeave={handleMenu}
        variant='permanent'

      >
        <Paper elevation={24} sx={{ height: '100vh' }}>

          <List sx={{ width: openMenu ? '200px' : '80px' }}>
            <ListItem>
              <img src="http://52.15.115.118/assets/img/ceibo.png" width={openMenu ? '150' : '50'} height={openMenu ? '150' : '50'} alt="qatar2022" sx={{ p: 1 }} />
            </ListItem>
            <Divider />

            <ListItem><Link href='/'>{openMenu ? 'Home' : 'a'}</Link></ListItem>
            <ListItem><Link href='/ventas'>{openMenu ? 'Ventas' : 'a'}</Link></ListItem>
            <ListItem><Link href='/ventas'>{openMenu ? 'Consignados' : 'a'}</Link></ListItem>
          </List>
        </Paper>

      </Drawer>
    </Box>
  )
}
