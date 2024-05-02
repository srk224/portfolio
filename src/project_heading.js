import "./exp_h.css"
import ScrollAnimation from 'react-animate-on-scroll';

function Project_Heading(props) {
    return (
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <h1 class="experience_heading">PROJECTS</h1>
    </ScrollAnimation>
    );
}

export default Project_Heading;