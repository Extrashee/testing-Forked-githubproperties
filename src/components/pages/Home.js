import React , {useState} from 'react'
import { Box } from '@mui/material'
import { SearchOff } from '@mui/icons-material'
import HeroBanner  from '../HeroBanner'
import SearchExcercises from '../SearchExcercises'
import Excercises from '../Excercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [excercises, setExcercises] = useState([])

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises bodyPart = {bodyPart} setExcercises = {setExcercises}
      setBodyPart={setBodyPart}
      />
      <Excercises bodyPart = {bodyPart} 
      excercises = {excercises}
      setExcercises = {setExcercises}/>
    </Box>
  )
}

export default Home