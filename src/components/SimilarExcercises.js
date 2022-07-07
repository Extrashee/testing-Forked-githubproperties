import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExcercises = ({targetMuscleData, equipmentMuscleData}) => {
  return (
    <Box sx={{marginTop: { lg: '100px', xs: '0px'}}} p='20px'>
      <Typography sx={{
        fontSize: { lg: '40px', sm: '30px', xs: '24px'}
      }} mb='25px'>
        Exercises that <span style={{ color: '#ff2526', fontWeight: '600'
        ,textTransform:'capitalize'}}>Target</span>  the same <span style={{ color: '#ff2526', fontWeight: '600'
        }}>muscle</span>  Group
      </Typography>
      <Stack direction='row' sx={{position: 'relative'}} p='20px'>
        { targetMuscleData.length ? <HorizontalScrollBar data={targetMuscleData}/> : 
        <Loader />
        }
      </Stack>
      <Typography mt='70px' sx={{
        fontSize: { lg: '40px', sm: '30px', xs: '24px'}
      }} mb='25px'>
        Exercises that <span style={{ color: '#ff2526', fontWeight: '600'
        }}>use</span>  the same <span style={{ color: '#ff2526', fontWeight: '600'
        }}>equipment</span> 
      </Typography>
      <Stack direction='row' sx={{position: 'relative'}} p='20px'>
        { equipmentMuscleData.length ? <HorizontalScrollBar data={equipmentMuscleData}/> : 
        <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExcercises