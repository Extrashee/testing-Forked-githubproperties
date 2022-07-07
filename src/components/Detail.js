import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Button, Stack } from '@mui/material'
import BodyPart from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({excerciseDetail}) => {
const { bodyPart, gifUrl, name, target , equipment } = excerciseDetail

const extraDetails = [
    { image: BodyPart, name: bodyPart},
    { image: TargetImage, name: target},
    { image: EquipmentImage, name: equipment}
]

  return (
   <Stack id='excercises' gap='60px' sx={{
    flexDirection: { lg: 'row'} , p: '20px' , alignItems: 'center'
   }} >
        <img src={gifUrl} alt='Image' loading='lazy' className='detail-image'/>
        <Stack sx= {{gap: {lg: '35px', xs: '20px'}}}>
            <Typography textTransform='capitalize' sx={{
        fontSize: { lg: '40px', sm: '30px', xs: '28px'},ml: {md: '35px'}
      }}  fontWeight='bold' >
                {name}
            </Typography>
            <Typography mb='35px'  sx={{
        fontSize: { lg: '20px', sm: '16px', xs: '15px'},ml: {md: '35px'}
      
            }} >
                Exercises keep you Strong. {name} {` `} is one of the best exercises
                to target your {target}. It will help you improve your mood and gain energy. 
            </Typography>
            {
                extraDetails.map((item) => (
                    <Stack  key={item.name} direction='row' sx={{ 
                        ml: {md: '35px'} ,gap: '25px', alignItems: 'center'}}>
                        <Button sx= {{
                            p: '24px' , borderRadius: '50%', backgroundColor: '#fff2db'
                        }}>
                        <img src={item.image} alt={item.name}/>
                        </Button>
                        <Typography textTransform='capitalize' sx={{ fontSize: '20px',
                    fontWeight: 'bold'}}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
   </Stack>
  
  )
}

export default Detail