const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="logo"><div className="box"><a href="/">N</a></div></div>
            <div className="links">
                <a className="nav-links" href="#skill"><span>01.</span> Skill</a>
                <a className="nav-links" href="#achievements"><span>02.</span> Achievements</a>
                <a className="nav-links" href="#projects"><span>03.</span> Projects</a>
                <a className="nav-links" href="#contact"><span>04.</span> Contact</a>
                <div className="resume"><div className="r-box"><a className="r-link" href="/">Resume</a></div></div>
            </div>
            <div className="links-drop">
                <div class="dropdown">
                <button>Menu</button>
                <div class="dropdown-options">
                    <a href="#skill">Skill</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="" id="m-resume">Resume</a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;