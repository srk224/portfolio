import './experience.css'

function Experience(props) { 
    return (
        <div className="experience">    
            <div className="experience_card">
                <div class="experience_card1">
                    <h1 class="company_name">{props.role}</h1>
                    <h4 class="role">{props.company_name} <span class="date"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.date}</span></h4>
                    <ul>
                        <li>{props.bullet1}</li>
                        <li>{props.bullet2}</li>
                        <li>{props.bullet3}</li>
                    </ul>
                </div>
            </div>
        </div>

    );

}

export default Experience;