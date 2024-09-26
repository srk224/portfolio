import './resume.css'
import { motion } from "framer-motion"

function Resume(){
   return (
    <motion.a
    className = "resume_link"
    target="_blank" 
    rel="noreferrer noopener" 
    href = "https://drive.google.com/file/d/1gl1bzU4ghHKE9IpI-ptMq2Cjxl7mjd-b/view?usp=sharing"
    whileHover={{ scale: 1.1 , rotate: 360}}
    whileTap={{ scale: 0.9 }}>
    
    Download Resume
    </motion.a>
    );
}

export default Resume;