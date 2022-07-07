import React , {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import BodyParts from './BodyParts'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import ExcerciseCard from './ExcerciseCard'

import Icon from '../assets/icons/target.png'
import Icon1 from '../assets/icons/body-part.png'
import Icon2 from '../assets/icons/equipment.png'
import Icon3 from '../assets/icons/Logo.png'
import Icon4 from '../assets/icons/gym.png'

import LeftIcon from '../assets/icons/left-arrow.png'
import RightIcon from '../assets/icons/right-arrow.png'

const imageList = [
  Icon,Icon1, Icon2, Icon3, Icon4, 
  Icon,Icon1, Icon2, Icon3, Icon4, Icon
]

const LeftSide = () => {
 const { scrollPrev } = useContext(VisibilityContext)

 return (
    <Typography onClick={ () => scrollPrev() } className='right-arrow'>
        <img src={LeftIcon} alt='leftIcon'/>  <Typography fontSize= '15px'
         ml='58px' mt='-3px'
           sx={{ display: {lg: 'none',md: 'none' ,  sm: 'none', xs:'block'}, 
           letterSpacing: '1px'}}>     &nbsp;<i>or scroll right</i>
                 
            </Typography>
    </Typography>
 )
}

const RightSide = () => {
    const { scrollNext } = useContext(VisibilityContext)
   
    return (
       <Typography onClick={() => scrollNext() } className='left-arrow'>
           <img src={RightIcon} alt='leftIcon'/> <Typography  fontSize= '15px' ml='68px'
           sx={{  letterSpacing: '1px' ,display: {lg: 'none', md: 'none' ,sm: 'none', xs:'block'}}}>&nbsp; 
            <i>or scroll left</i>
            </Typography>
      </Typography>
    )
   
   }

   // styles = {{ justifyContent: 'center'}}

const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu sx = {{
    }} LeftArrow={LeftSide} RightArrow={RightSide}>
        {data.map((item, index) => (
            <Box 
            key = {item.id || item}
            itemId = {item.id || item}
            title  =  {item.id || item}
            m='0 30px'
            >
              {
                isBodyParts ? <BodyParts Icons = {imageList[index]} item = {item} bodyPart = {bodyPart}
                setBodyPart = {setBodyPart}
                /> :
                <ExcerciseCard item={item} /> 
              } 
            </Box>
        ))
        }
    </ScrollMenu>
  )
}

export default HorizontalScrollBar