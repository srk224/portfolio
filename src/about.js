import './about.css';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react';

function About() {
  return (
    <div className="about">
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <h1 class="about_heading">ABOUT ME</h1> <br />
          </ScrollAnimation>
              <h3 class="about_me">Computational Mathematics Student at the University of Waterloo with Minor in Computer Science and Combinatorics and Optimization</h3>
              <hr class="line"></hr>
    </div>
  );
}

export default About;

// expo
