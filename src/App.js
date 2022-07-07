import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Home from './components/pages/Home.js'
import ExcerciseDetail from './components/pages/ExcerciseDetail'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <Box width='400px'  sx= {{ width: {xl: '1400px' }}} m ='auto' >
        <Navbar/>
        <Routes>
            <Route path='/' element = { <Home /> } />
            <Route path='/excercise/:id' element = { <ExcerciseDetail /> } />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App