import React from 'react'
import { Stack, Box, Typography } from '@mui/material'


const BodyParts = ({item, bodyPart, setBodyPart, Icons}) => {

  
  return (
    <Stack   type='button'
    className='bodyPart-card' 
    alignItems = 'center'
    justifyContent= 'center'
    sx={{
        borderTop:  bodyPart === item ? '3px solid #ff2625'
        : '',
        borderLeftBottomRadius: '25px',
        backgroundColor: 'white',
        width: '270px',
        height: '280px',
        gap: '47px',
        cursor: 'pointer'
    }}
    onClick = {() => {
       setBodyPart(item);
      window.scrollTo({top: 1850, left: 100, behavior: 'smooth'})
      }}
    
    >
        <img src={Icons} alt='Gym strength' style={{
            width: '50px', height: '50px'
        }}/>
        <Typography fontSize='24px' fontWeight='bold' textTransform='capitalize'
        color= '#3A1212' >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyParts