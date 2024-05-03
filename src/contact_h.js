import "./contact.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


function Contact(props) {
    return (
        <div className="about">
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <h1 class="about_heading">CONTACT</h1> <br />
            </ScrollAnimation>
            <div class="icons">
                <a href="https://github.com/srk224"><FaGithub size="100px" /></a>
                <a href="https://www.linkedin.com/in/abdul-shahrukh-khan-8230281b7/"><FaLinkedin size="100px" /></a>
                <a href="https://dribbble.com/srk224"><FaDribbble size={100} margin={200} /></a>
            </div>
  </div>
    );
}

export default Contact;