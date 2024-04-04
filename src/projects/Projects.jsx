import Header from "../header/Header";
import './Projects.css'
import restuarant from '../assets/restuarent.png'
import toDo from '../assets/to_do.png'
import technical from '../assets/technical.png'

const Projects = () => {
    return (
        <div className="projects-page">
            <Header title="03. Projects"/>
            <div className="projects-body">
                <div id="pro-head">
                    <h2>Projects</h2>
                    <a href="" id="pro-link">See more</a>
                </div>
                <div className="container">
                <div className="project">
                        <img src={toDo} alt="restuarent project image"/>
                        <div className="project-text">
                            <h3>To Do list</h3>
                            <div className="p-tag">
                                <span>html</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>
                            <div className="p-button">
                                <div className="p-view"><div className="p-box"><a target='_blank' className="p-link" href="https://github.com/nasemul1/to-do-list">github</a></div></div>
                                <div className="p-view"><div className="p-box"><a target='_blank' className="p-link" href="https://nasemul1.github.io/to-do-list/">view</a></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src={restuarant} alt="restuarent project image"/>
                        <div className="project-text">
                            <h3>Restuarant Menu</h3>
                            <div className="p-tag">
                                <span>html</span>
                                <span>CSS</span>
                            </div>
                            <div className="p-button">
                                <div className="p-view"><div className="p-box"><a target='_blank' className="p-link" href="https://github.com/nasemul1/restaurantMenu">github</a></div></div>
                                <div className="p-view"><div className="p-box"><a target='_blank' className="p-link" href="https://nasemul1.github.io/restaurantMenu/">view</a></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src={technical} alt="restuarent project image"/>
                        <div className="project-text">
                            <h3>Technical Documentation page</h3>
                            <div className="p-tag">
                                <span>html</span>
                                <span>CSS</span>
                            </div>
                            <div className="p-button">
                                <div className="p-view"><div className="p-box"><a target='_blank' className="p-link" href="https://github.com/nasemul1/technicaldocumentationpage">github</a></div></div>
                                <div className="p-view"><div className="p-box"><a target='_blank' className="p-link" href="https://nasemul1.github.io/technicaldocumentationpage/">view</a></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;