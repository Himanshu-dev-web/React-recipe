import React from 'react'
import Popular from '../components/popular'
import Veggies from '../components/Veggies'
import { BrowserRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
const home = () => {
  return (
   
       <motion.div
       animate={{opacity:1}} 
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
       >
         <Veggies /> 
         <Popular /> 
       </motion.div>
  )
}

export default home