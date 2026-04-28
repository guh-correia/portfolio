import "../../reset.css"
import "./style.css"

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li className="about"><a href="#about-me">About Me</a></li>
                    <li className="projects"><a href="#projects">Projects</a></li>
                    <li className="experience"><a href="#experience">Experience</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header