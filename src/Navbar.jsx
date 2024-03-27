const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="logo"><div className="box"><a href="/">N</a></div></div>
            <div className="links">
                <a className="nav-links" href="#about"><span>01.</span> About</a>
                <a className="nav-links" href="#works"><span>02.</span> Works</a>
                <a className="nav-links" href="#experiences"><span>03.</span> Experiences</a>
                <a className="nav-links" href="#contact"><span>04.</span> Contact</a>
                <div className="resume"><div className="r-box"><a className="r-link" href="/">Resume</a></div></div>
            </div>
        </div>
    );
}

export default Navbar;