import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Stack, Typography} from '@mui/material'

const ExcerciseCard = ({item}) => {
  return (
    <Link  textDecoration= 'none' className='exercise-card' to={`/excercise/${item.id}`} >
        <img src={item.gifUrl} alt='Loading' Loading='lazy'/>
        <Stack direction='row'>
            <Button sx={{
                ml: '30px', fontSize: '14px', borderRadius:'60px',
                color: 'white', background: '#ff2929', textTransform: 'capitalize'
            }} >
                {item.target}
            </Button>
            <Button sx={{
                ml: '30px', fontSize: '14px', borderRadius:'60px',
                color: 'white', background: '#fcc757', textTransform: 'capitalize'
            }} >
                {item.bodyPart}
            </Button>
        </Stack>
        <Typography ml='31px' width='80%' color='black' fontWeight='bold'
        textTransform='capitalize'  mt='15px' >
            {item.name}
        </Typography>
    </Link>
  
  )
}

export default ExcerciseCard