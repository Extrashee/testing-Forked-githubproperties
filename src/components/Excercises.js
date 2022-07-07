import React, {useState, useLayoutEffect, useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { excerciseOptions, fetchData } from '../utils/fetchData'
import ExcerciseCard from './ExcerciseCard'

const Excercises = ({ bodyPart, setExcercises, excercises }) => {

 
  const [currentPage, setCurrentPage] = useState(1)

  const paginate = (e, value) => {
    setCurrentPage(value)
     const testt = () => {
      if (check >=1200 ) {
        return 1700
      }
      else {
        return 1200
      }
     }

    window.scrollTo({ top: testt(), behavior: 'smooth'})
  }

  const [check, setCheck] = useState(window.innerWidth)

  
  console.log(check)

  const lastIndex = currentPage * 9
  const firstIndex = lastIndex - 9

  const currentExcercises = excercises.slice(firstIndex,
    lastIndex)



    useLayoutEffect(()=> {
      function updateSize() {
             setCheck(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize()
   return () => window.removeEventListener('resize', updateSize);
  }, [])
    // const useWindowSize = () => {
    //   const [size, setSize] = useState([0, 0]);
    //   useLayoutEffect(() => {
    //     function updateSize() {
    //       setSize([window.innerWidth, window.innerHeight]);
    //     }
    //     window.addEventListener('resize', updateSize);
    //     updateSize();
    //    return () => window.removeEventListener('resize', updateSize);
    //   }, []);
    //   return size;
    // }

    // const [widthh, height] = useWindowSize();

    useEffect(() => {
      
        const fetchBodyPartData = async () => {
          let excerciseData = []
          if (bodyPart === 'all') {
            excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions)
          }
          else {
            excerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            excerciseOptions)
          }

          setExcercises(excerciseData)
        }
         console.log(bodyPart)
        fetchBodyPartData()
    } , [bodyPart])



  return (
    <Box id='excercises'
    sx= {{
      mt: { lg: '110px'}
    }} mt='50px' p='20px'>

      <Typography sx={{ textTransform: 'capitalize', fontWeight: 'bold',
        fontSize: {lg: '44px', sm: '33px', xs: '25px'}
      }} mb='27px' p='20px'>
        Showing results
      </Typography>
      <Stack direction='row'
      sx={{ gap: {lg: '110px', sm: '50px',  xs: '30px'}}}
      flexWrap= 'wrap' justifyContent='center'
      >
        {
          currentExcercises.map((item, index) => (
            <ExcerciseCard key={index} item = {item} />
          ))
        }
      </Stack>
      <Stack mt='80px' sx ={{
        width:{sm: '100%', xs: '100%', lg: '100%'},
        marginLeft: { lg: 'auto', sm: 'auto', xs: '0px'}
      }}  
    
     alignItems='center'>
          {excercises.length > 9 && (
            <Box >
               <Pagination 
              shape= 'rounded'
              defaultPage={1}
              count= {Math.ceil(excercises.length/9)}
              page={currentPage}
              onChange={paginate}
              color= 'error'
              size= { check > 450 ? 'large' : 'small' }
            
              
            >

            </Pagination>
          
            </Box>
           
          )

          }
      </Stack>
    </Box>
  )
}

export default Excercises