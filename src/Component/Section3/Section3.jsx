import React,{useRef} from 'react';
import './Section3.css'
import { useTransform,motion ,useScroll} from 'framer-motion';

const Section3 = () => {
    const container=useRef()
    const {scrollYProgress}=useScroll({
      target: container,
      offset:["center start","end end"]
    })

    const scale=useTransform(scrollYProgress,[1,0],[0.5,1])

    return (
        <div ref={container}>
            <motion.div style={{scale}} className='sec3'>
                <center>
                <iframe className='youtube' src="https://www.youtube.com/embed/d8z2guJD9-g?si=4swsC5MrW8QK3oo7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </center>
                
            </motion.div>
        </div>
    );
};

export default Section3;