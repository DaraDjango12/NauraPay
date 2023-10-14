import { useState } from 'react'

import './App.css'
import NavRoutes from './routes/NavRoutes'
import {gsap,Power3} from "gsap";

function App() {
  let tl= new gsap.timeline();
  let ease =Power3.easeOut();
  

  return (
    
      <>
      <NavRoutes/>
        
      </>
      
    
  )
}

export default App
