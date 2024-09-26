import './resume.css'
import { motion } from "framer-motion"

function Resume(){
   return (
    <motion.a
    className = "resume_link"
    target="_blank" 
    rel="noreferrer noopener" 
    href = "https://drive.google.com/file/d/1321-yFiKTWoqTgYco8ug5nE4HxCAHch7/view?usp=sharing"
    whileHover={{ scale: 1.1 , rotate: 360}}
    whileTap={{ scale: 0.9 }}>
    
    Download Resume
    </motion.a>
    );
}

export default Resume;