import './experience.css'
import ScrollAnimation from 'react-animate-on-scroll';

function Experience(props) { 
    return (
        <div className="experience">
            
            <div className="heading">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <h1 class="experience_heading">EXPERIENCE</h1>
            </ScrollAnimation>
            </div>  
            <div className="experience_card">
                <div className="experience_card1">
                    <h1 class="compant_name">HomeTrust</h1>
                    <h2 class="role">Generative AI Intern</h2>
                    <h5 class="date">2018-2022</h5>
                    <ul>
                        <li>Something Something</li>
                        <li>soemghingMore of something anf </li>
                        <li>soemghingMore of something anf and more of something</li>
                    </ul>
                </div>
                
            </div>

        </div>

    );

}

export default Experience;