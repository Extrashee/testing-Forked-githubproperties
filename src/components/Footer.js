import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Logo from '../assets/images/was.png'

const Footer = () => {
  return (
    <Box mt='80px' width='100%' backgroundColor='#fff3f4' py='35px'>
      <Stack px='40px' alignItems='center' justifyContent='center'>
        <img src={Logo} alt='logo' className='footer-img' />
        <Typography variant='h6' mt='30px' ml='8px'>
        Made with ❤️ by JustZion
      </Typography>
      </Stack>
    
    </Box>
  )
}

export default Footer