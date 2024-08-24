import { useRef } from 'react'
import './App.css'
import Section1 from './Component/Section1/Section1'
import Section2 from './Component/Section2/Section2'

import {useScroll} from "framer-motion"



function App() {
  const container=useRef()
  const {scrollYProgress}=useScroll({
    target: container,
    offset: ["start start","end end"]
  })

  return (
    <>
      <div ref={container} className='main'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress}/>

      </div>  
    </>
  )
}

export default App
