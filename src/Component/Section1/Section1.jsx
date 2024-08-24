import React from 'react';
import './Section1.css'
import { useTransform,motion } from 'framer-motion';
const Section1 = ({scrollYProgress}) => {

    const scale=useTransform(scrollYProgress, [0,1],[1,0.8])
    const rotate=useTransform(scrollYProgress,[0,1] ,[0, -5])

    return (
        <motion.div style={{scale,rotate}} className='sec1'>
            <center>
                <h1>section1</h1>
            </center>
            
        </motion.div>
    );
};

export default Section1;