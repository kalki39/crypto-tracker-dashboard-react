import "./styles.css";
import iphone from "../../../assests/iphone.png";
import gradient from "../../../assests/gradient.png";
import React from 'react';
import Button from "../../Common/Button";
import { motion } from "framer-motion"
function MainComponent() {
  return (
    <div className="flex-info">
        <div className="left">
            <motion.h1 
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5 , delay:0.5}}
            className="crypto-heading">Track Crypto</motion.h1>

            <motion.h1 
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5 ,delay :0.75}}
            className="real-time-heading">Real Time.</motion.h1>
            <motion.p 
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5 ,delay :1}}
            className="info-text">
                Track crypto through a public api in real time. Visit the dashboard to do so!
            </motion.p>
            <motion.div 
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.5 ,delay :1.5}}
            className="btn-flex">
                <Button text="Dashboard"/>
                <Button text="Share" outlined={true}/>
            </motion.div>
        </div>
        <div className="right">
            <motion.img 
            initial={{y:-10}}
            animate={{y:10}}
            transition={{
                type:"smooth",
                repeatType: "reverse",
                duration: 2,
                repeat:"Infinity",
            }}
            src={iphone} className="iphone" />
            <img src={gradient} alt="" className="gradient" />
        </div>
    </div>
  )
}

export default MainComponent