import './name.css';
import { motion } from 'framer-motion';

function Name() {
  return (
    <div className="Name">
            <motion.h1 class="namee"
            whileHover={{ scale: 2}}
            >Abdul Shahrukh Khan </motion.h1>
            {/* <h1 class="dd">DESGINER AND DEVELOPER</h1> */}
    </div>
  );
}

export default Name;