import "./style.css"
import Header from "../../components/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
// import { useState } from "react"

function LandingPage() {
    addEventListener("DOMContentLoaded", () => {
        const homeHeight = window.innerHeight
        document.getElementById("home").style.height = homeHeight
    })
    
    return (
        <>
            <Header />

            <div id="home">
                <div className="grid-background"></div>
                <div className="about-me">
                    <div className="image-shadow">
                        <img src="/profile-photo.jpg" alt="Profile Photo" />
                    </div>
                    <div className="information">
                        <h1>Hi! My name is <span>Gustavo</span></h1>
                        <h2>I'm a <span>FrontEnd Developer</span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic officia, atque dolore ratione eos, doloribus sequi quia reiciendis soluta molestias quas, sed corporis doloremque fuga? Doloremque ipsa dicta recusandae unde. </p>

                        <h3>My contacts</h3>
                        <div className="icons">
                            <a target="_blank" href="https://github.com/guh-correia"><FontAwesomeIcon className="social-icons" icon="fa-brands fa-github"/></a>
                            <a target="_blank" href="https://www.linkedin.com/in/gustavo-feitosa-correia/"><FontAwesomeIcon className="social-icons" icon="fa-brands fa-linkedin"/></a>
                            <a target="_blank" href="mailto:gustavozampellifranco@gmail.com">
                                <FontAwesomeIcon className="social-icons" icon="fa-solid fa-envelope"/></a>
                            <a target="_blank" href="https://wa.me/41996834864"><FontAwesomeIcon className="social-icons" icon="fa-brands fa-whatsapp"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default LandingPage