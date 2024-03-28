import './skills.css'
import cprograming from '.././assets/c.png'
import cpp from '.././assets/c++.png'
import bootstrap from '.././assets/bootstrap.png'
import html from '.././assets/html-5.png'
import css from '.././assets/css-3.png'
import jsImg from '.././assets/js.png'
import reactImg from '.././assets/react.png'
import figma from '.././assets/Figma.png'

const Skills = () => {
    return (
        <div className="skills">
            <p id='page-head'>01. Skills</p>
            <div className="grid-container">
                <div className="skill-logo">
                    <img src={html} alt="html logo" id="html" />
                    <img src={css} alt="css logo" id="css" />
                    <img src={jsImg} alt="js logo" id="js" />
                    <img src={bootstrap} alt="bootstrap logo" id="bootstrap" />
                    <img src={reactImg} alt="react logo" id="react" />
                    <img src={figma} alt="figma logo" id="figma" />
                    <img src={cprograming} alt="c logo" id="c" />
                    <img src={cpp} alt="cpp logo" id="cpp" />
                </div>
                <div className="skill-text">
                    <h4>Languages:</h4>
                    <p>html, css, javascript, c, c++</p>
                    <h4>Frameworks:</h4>
                    <p>Bootstrap, react js</p>
                </div>
            </div>
        </div>
    );
}
 
export default Skills;