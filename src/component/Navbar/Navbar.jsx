import "./styleNavbar.css";

function Navbar() {
    return (
        <div className="c-nav">
            <span className="namegw">David Bunyamin</span>
            <div className="navi">
                <a href="#home"><span>Home</span></a>
                <a href="#aboutme"><span>Aboutme</span></a>
                <a href="#skills"><span>Skills</span></a>
                <a href="#projects"><span>Projects</span></a>
                <a href="#contact"><span>Contact</span></a>
            </div>
        </div>
    );
}

export default Navbar;