import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack 
        direction= 'row' justifyContent='space-around'
        sx= {{ gap: {sm: '128px' , xs: '40px'} , mt: {
            sm: '35px' , xs: '20px'
        }, justifyContent: 'none' }} px='20px'
        
    >
        <Link to='/' >
            <img src = {Logo} alt='Logo' style = {{
                width: '48px', height: '48px' , margin: '0px 20px'}}/>
        </Link>
        <Stack 
            direction='row'
            gap= '40px'
            alignItems = 'flex-end'
            >
            <Link style= {{ marginRight: '22px' , textDecoration: 'none', color: '#3A1212',
        borderBottom: '3px solid #FF2526'}} to='/'>Home
        </Link>
            <a href='#excercises' style= {{ textDecoration: 'none',
        color: '#3A1212'}}>Excercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar