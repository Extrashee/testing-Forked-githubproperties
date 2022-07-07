import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box  sx= {{ 
        mt: { lg: '122px', xs: '70px' }, 
        ml : { sm: '50px'} }} position='relative' p='20px'>
        <Typography color='#FF2526' fontWeight='600'
        fontSize= '26px'>
            Misty Fitness
        </Typography>
        <Typography mb='24px' fontWeight={700}
        sx={{ fontSize: { lg: '44px' , xs: '40px'}}}>
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography mt='25px' mb='41px' fontSize='20px' lineHeight='35px'>
           Check out the most effective excercises personally
        </Typography>
        <Button onClick = { () => window.scrollTo({
          top: 1850, behavior: 'smooth' 
        })} className='explore'
        sx={{ letterSpacing: '2px',
          backgroundColor: '#ff2526' , padding: '13px 20px'
        }}  variant='contained'>Explore Excercises</Button>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
        <Typography color='#ff2526' fontSize='200px' sx = {{
          opacity: '0.1' , display : { lg: 'block' , sm: 'none', xs:'none' }
        }} >
          Excercises
        </Typography>
    
    
    </Box>
  )
}

export default HeroBanner