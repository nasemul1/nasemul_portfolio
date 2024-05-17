import './skills.css'
import cprograming from '.././assets/c.png'
import cpp from '.././assets/c++.png'
import bootstrap from '.././assets/bootstrap.png'
import html from '.././assets/html-5.png'
import css from '.././assets/css-3.png'
import jsImg from '.././assets/js.png'
import reactImg from '.././assets/react.png'
import figma from '.././assets/Figma.png'
import gitImg from '.././assets/git.png'
import Header from '../header/Header'

const Skills = () => {
    return (
        <div className="skills">
            <Header title="01. Skills" next="#achievements"/>
            <div className="grid-container">
                <div className="skill-logo">
                    <img src={html} alt="html logo" className='tech-logo' id="html" />
                    <img src={css} alt="css logo" className='tech-logo' id="css" />
                    <img src={jsImg} alt="js logo" className='tech-logo' id="js" />
                    <img src={bootstrap} alt="bootstrap logo" className='tech-logo' id="bootstrap" />
                    <img src={reactImg} alt="react logo" className='tech-logo' id="react" />
                    <img src={figma} alt="figma logo" className='tech-logo' id="figma" />
                    <img src={cprograming} alt="c logo" className='tech-logo' id="c" />
                    <img src={cpp} alt="cpp logo" className='tech-logo' id="cpp" />
                    <img src={gitImg} alt="git logo" className='tech-logo' id="git" />
                </div>
                <div className="skill-text">
                    <h3>Skills:</h3>
                    <p>I bring websites to life as a Front-End Developer, wielding HTML, CSS, JavaScript, React, and Bootstrap.  I translate designer dreams into user-friendly interfaces, ensuring responsive experiences across all devices.  My expertise fosters engaging interactions and pixel-perfect execution.</p>
                    <h4>Languages:</h4>
                    <p>html, css, javascript, c, c++</p>
                    <h4>Frameworks:</h4>
                    <p>Bootstrap, react js</p>
                    <h4>Softwares:</h4>
                    <p>git, github, Figma, photoshop, illustrator, vs code</p>
                </div>
            </div>
        </div>
    );
}
 
export default Skills;