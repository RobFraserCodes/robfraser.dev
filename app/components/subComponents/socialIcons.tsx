import React from 'react'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {}

function SocialIcons({}: Props) {
  return (
    <div className=''>
        <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 0.8 }}
            transition={{ duration: 0.5 }}>
            {/* Social Media Icons */}
            <SocialIcon
                url="https://twitter.com/robfrasercodes"
                bgColor="transparent"
                fgColor="#ffffff"
            />
            <SocialIcon 
                url="https://github.com/RobFraserCodes"
                fgColor="white"
                bgColor="transparent" 
            />
            <SocialIcon 
                url="https://medium.com/@rob.fraser.daviot"
                fgColor="white"
                bgColor="transparent" 
            />
            <SocialIcon
                url="https://www.linkedin.com/in/rob-fraser-codes/"
                bgColor="transparent"
                fgColor="#ffffff"
            />
        </motion.div>
    </div>
  )
}

export default SocialIcons;