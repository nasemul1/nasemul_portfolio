const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="logo"><div className="box"><a href="/">N</a></div></div>
            <div className="links">
                <a className="nav-links" href="#skill"><span>01.</span> Skill</a>
                <a className="nav-links" href="#achievements"><span>02.</span> Achievements</a>
                <a className="nav-links" href="#works"><span>03.</span> Works</a>
                <a className="nav-links" href="#contact"><span>04.</span> Contact</a>
                <div className="resume"><div className="r-box"><a className="r-link" href="/">Resume</a></div></div>
            </div>
            <div className="links-drop">
                <div class="dropdown">
                <button>Menu</button>
                <div class="dropdown-options">
                    <a href="#skill">Skill</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;