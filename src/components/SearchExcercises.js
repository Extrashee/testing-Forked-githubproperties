import React , {useState, useEffect} from 'react'
import { Box , Stack, Typography, TextField, Button } from '@mui/material'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import  HorizontalScrollBar from './HorizontalScrollBar'

const SearchExcercises = ({bodyPart , setBodyPart, setExcercises}) => {

  const [search, setSearch] = useState('')
 
  const [bodyParts, setBodyParts] = useState([])

  const handleSearch = async () => {
    if (search) {
      const excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
      excerciseOptions)

      const searchedExcercises = excerciseData.filter((excercise) => excercise.name.toLowerCase().includes(search)
      || excercise.target.toLowerCase().includes(search)
       || excercise.equipment.toLowerCase().includes(search)
       || excercise.bodyPart.toLowerCase().includes(search)
     )
     
     console.log(searchedExcercises)
     setExcercises(searchedExcercises)
    //  console.log(excerciseData)
    }
    
  }

  useEffect(() => {
    const fetchDataFirst =  async () => {
      const dataa = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',excerciseOptions )
      setBodyParts(['all', ...dataa])
     
     
    }

    fetchDataFirst()
    
  }, [])

  return (
    <Stack alignItems='center'
    justifyContent='center'
    p='30px'
    >
      <Typography sx = {{
        fontWeight: '700' , fontSize: {
          lg: '44px' , xs: '25px' 
        }, textAlign: 'center'
      }} mb='20px' mt='40px' >
        Awesome Excercises You <br /> Should Know
      </Typography>
      <Box position = 'relative' mt='20px' mb='74px'>
        <TextField 
        height='76px'
        value={search}
        onChange = {(e) => setSearch(e.target.value.toLowerCase())}
        placeholder='Search Excercises'
        type='text'
       sx = {{
        input: {
          border: 'none',
          fontWeight: '700',
          borderRadius: '4px'
        },
        width: {
          lg: '895px', sm:'350px',
          xs: '200px'
        },
        backgroundColor: '#ff',
        borderRadius: '40px'
       }}
        />
        <Button sx ={{height:'56px',
          backgroundColor: '#ff2526',
          color: '#fff',
          textTransform: 'none',
          letterSpacing: {
            lg: '2px' , sm: '1px'
          },
          width: { lg: '170px', sm: '100px'},
          fontSize: { lg: '22px' , sm: '17px' }
        }} 
        onClick={handleSearch}
        className='search-btn'>
          Search
        </Button>
      </Box>
      <Box sx = {{ position: 'relative', width: '100%', padding:'20px'}}>
    <HorizontalScrollBar data = {bodyParts} setExcercises = {setExcercises} 
     bodyPart = {bodyPart} setBodyPart = {setBodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExcercises