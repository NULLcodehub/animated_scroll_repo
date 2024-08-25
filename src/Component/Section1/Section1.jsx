import React from 'react';
import './Section1.css'
import { useTransform,motion,useScroll } from 'framer-motion';
const Section1 = ({scrollYProgress}) => {

    const scale=useTransform(scrollYProgress, [0,1],[1,0.8])
    const rotate=useTransform(scrollYProgress,[0,1] ,[0, -5])

    const {scrollY}=useScroll()

    const bottom=useTransform(scrollY,[0,900],['0px','400px'])
    // const fontSize=useTransform(scrollY,[0,800],['4rem','8rem'])

    return (
        <motion.div style={{scale,rotate}} className='sec1'>
            <center>
                <motion.h1 style={{position:'relative',bottom:bottom}}>Where Ideas Transform into Reality.</motion.h1>
            </center>
            
        </motion.div>
    );
};

export default Section1;