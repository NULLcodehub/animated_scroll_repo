import React from 'react';
import './Section2.css'

import { useTransform,motion } from 'framer-motion';

const Section2 = ({scrollYProgress}) => {


    const scale=useTransform(scrollYProgress, [0,1],[0.8,1])
    const rotate=useTransform(scrollYProgress,[0,1] ,[-5,0])
    const backgroundColor=useTransform(scrollYProgress,[0,1],["#7b50f1", "#181818" ])
    const textColor=useTransform(scrollYProgress,[0,1],["#181818","#ffffff"])
    const fontSize=useTransform(scrollYProgress,[0,1],["5rem","2rem"])
    const bottom=useTransform(scrollYProgress,[0,1],['500px','250px'])

    return (
        <motion.div style={{backgroundColor,scale,rotate}} className='sec2'>
            <center>
                <motion.p style={{color:textColor,fontSize,position:'relative',bottom:bottom}}>Discover insights, trends, and innovations shaping our world</motion.p>
            </center>
            
        </motion.div>
    );
};

export default Section2;