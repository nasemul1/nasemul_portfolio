import Header from "../header/Header";
import './Projects.css'
import toDo from '../assets/to_do.png'
import restuarant from '../assets/restuarent.png'
import technical from '../assets/technical.png'
import glass from '../assets/glass.png'

const Projects = () => {
    return (
        <>
            <Header title="03. Projects"/>
            <div className="projects-body">
                <div className="project-heading">
                    <h2>Projects</h2>
                    <a href="">See more</a>
                </div>
                <div className="project-container">
                    <div className="proj">
                        <img src={toDo} alt="to do app image" />
                        <div className="proj-bottom">
                            <h3>To-Do App</h3>
                            <div className="proj-tag">
                                <span>html</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>
                            <div className="proj-btn">
                                <div><a href="https://github.com/nasemul1/to-do-list" target="_blank"><i class="fa-brands fa-github"></i> Code</a></div>
                                <div><a href="https://nasemul1.github.io/to-do-list/" target="_blank"><i class="fa-solid fa-eye"></i> View</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="proj">
                        <img src={restuarant} alt="restuarant menu image" />
                        <div className="proj-bottom">
                            <h3>Restuarant Menu</h3>
                            <div className="proj-tag">
                                <span>html</span>
                                <span>CSS</span>
                            </div>
                            <div className="proj-btn">
                                <div><a href="https://github.com/nasemul1/restaurantMenu" target="_blank"><i class="fa-brands fa-github"></i> Code</a></div>
                                <div><a href="https://nasemul1.github.io/restaurantMenu/" target="_blank"><i class="fa-solid fa-eye"></i> View</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="proj">
                        <img src={glass} alt="Glass morphism page" />
                        <div className="proj-bottom">
                            <h3>GlassMorphism page</h3>
                            <div className="proj-tag">
                                <span>html</span>
                                <span>CSS</span>
                            </div>
                            <div className="proj-btn">
                                <div><a href="https://github.com/nasemul1/glass_morphism" target="_blank"><i class="fa-brands fa-github"></i> Code</a></div>
                                <div><a href="https://nasemul1.github.io/glass_morphism/" target="_blank"><i class="fa-solid fa-eye"></i> View</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="proj">
                        <img src={technical} alt="Technical documentation page" />
                        <div className="proj-bottom">
                            <h3>Documentation page</h3>
                            <div className="proj-tag">
                                <span>html</span>
                                <span>CSS</span>
                            </div>
                            <div className="proj-btn">
                                <div><a href="https://github.com/nasemul1/technicaldocumentationpage" target="_blank"><i class="fa-brands fa-github"></i> Code</a></div>
                                <div><a href="https://nasemul1.github.io/technicaldocumentationpage/" target="_blank"><i class="fa-solid fa-eye"></i> View</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Projects;