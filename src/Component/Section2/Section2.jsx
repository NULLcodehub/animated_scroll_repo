import React from 'react';
import './Section2.css'

import { useTransform,motion } from 'framer-motion';

const Section2 = ({scrollYProgress}) => {

    const scale=useTransform(scrollYProgress, [0,1],[0.8,1])
    const rotate=useTransform(scrollYProgress,[0,1] ,[-5,0])

    return (
        <motion.div style={{scale,rotate}} className='sec2'>
            <center>
                <h1>section2</h1>
            </center>
            
        </motion.div>
    );
};

export default Section2;