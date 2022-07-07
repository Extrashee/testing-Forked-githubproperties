import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Loader from './Loader'

const ExcerciseVideos = ({ name, excerciseVideos}) => {

 
  return (
   <Box sx={{ marginTop: {lg: '200px', xs: '30px' }, p:'20px'}}>
      <Typography mb='40px' fontWeight='500' sx={{
        fontSize: { lg: '40px', sm: '30px', xs: '24px'}
      }} >
          Watch <span style={{ color: '#ff2526', fontWeight: '600'
        ,textTransform:'capitalize'}}>{name}</span> Youtube Videos
      </Typography>
    {
       !excerciseVideos.length ?
         <Loader />
      
    :
      
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' 
      sx = {{ flexDirection: { lg: 'row'} ,  gap: {lg: '50px', xs: '0px'}}}>
        { excerciseVideos?.slice(0,6).map((item,index) => (
          <a style= {{marginBottom: '50px' }}
          key={index}
          className='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel='noreferrer'
          >
            <img  src={item.video.thumbnails[0].url} alt={item.video.name} />
            <Box >
              <Typography mb='3px' sx={{
                fontSize: {lg: '25px', sm: '20px', xs: '17.5px'}
              }} fontWeight='bold' color='black'>
                {item.video.title}
              </Typography>
              <Typography fontSize='15px' color='black' >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        )) }
      </Stack> 
}
   </Box>
  )
}

export default ExcerciseVideos