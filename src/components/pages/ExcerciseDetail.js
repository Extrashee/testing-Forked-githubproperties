import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { excerciseOptions , fetchData, youtubeOptions } from '../../utils/fetchData'
import Detail from '../Detail'
import ExcerciseVideos from '../ExcerciseVideos'
import SimilarExcercises from '../SimilarExcercises'

const ExcerciseDetail = () => {

  const [excerciseDetail, setExcerciseDetail] = useState({})
  const [excerciseVideosDetails, setExcerciseVideosDetails] = useState([])
  const [targetMuscleData, setTargetMuscleData] = useState([])
  const [equipmentMuscleData, setEquipmentMuscleData] = useState([])

  const {id} = useParams()

  useEffect(() => {

    const fetchExcerciseDetail = async () => {
      const excerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

      const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com'
    
      const excerciseDetailResults = await fetchData(
        `${excerciseDbUrl}/exercises/exercise/${id}` , excerciseOptions
      )
      setExcerciseDetail(excerciseDetailResults)

      const excerciseVideos = await fetchData(`${youtubeSearch}/search?query=${
        excerciseDetailResults.name}`, youtubeOptions)
        setExcerciseVideosDetails(excerciseVideos.contents)

        const targetMuscleExcercises = await fetchData(
          `${excerciseDbUrl}/exercises/target/${excerciseDetailResults.target}`,
          excerciseOptions
        )
        setTargetMuscleData(targetMuscleExcercises)

        const EquipmentMuscleExcercises = await fetchData(
          `${excerciseDbUrl}/exercises/equipment/${excerciseDetailResults.equipment}`,
          excerciseOptions
        )
        setEquipmentMuscleData(EquipmentMuscleExcercises)
    }

    
    fetchExcerciseDetail()
    
    
  
  
  
  }, [id])



  return (
    <Box>
      <Detail excerciseDetail = {excerciseDetail}/>
      <ExcerciseVideos excerciseVideos = {excerciseVideosDetails}
      name = {excerciseDetail.name} />
      <SimilarExcercises  targetMuscleData = {targetMuscleData} 
      equipmentMuscleData={equipmentMuscleData} />
    </Box>
  )

}

export default ExcerciseDetail