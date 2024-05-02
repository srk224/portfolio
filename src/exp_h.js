import "./exp_h.css";
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react';

function Exp_h(props) {
    return (
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <h1 class="experience_heading">EXPERIENCE</h1>
        </ScrollAnimation>
    );
}

export default Exp_h;