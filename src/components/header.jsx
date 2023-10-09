import React, { useEffect, useState } from "react";
import './style.scss';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Aos from "aos";

const Header = () => {

    const [isSidebar, setisSidebar] = useState(true);
    const toggle = () => {
        let body = document.getElementById("MobView")
        setisSidebar(!isSidebar)
        body.classList.toggle("responsiv")
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let body = document.getElementById("scrollY")
            if (scrollY > 80) {
                body.classList.add("bg-light")
            } else body.classList.remove("bg-light")
        })

        Aos.init({ duration: 600 })

    }, [])

    const scroll = (divId) => {

        if (divId) {
            const element = document.getElementById(divId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else window.scrollTo(0, 0)
        toggle();
    }

    return (
        <nav className="navbar" data-aos="fade-down">
            <div className="container">
                <div className="nav-brand">
                    <a href="/">Asvith</a>
                </div>
                <div id="MobView" className="">
                    <ul className="nav-item m-0">
                        <li className="nav-link" onClick={()=>scroll(null)}>
                            <span>Home</span>
                        </li>
                        <li className="nav-link" onClick={()=>scroll("aboutme")}>
                            <span>About me</span>
                        </li>
                        <li className="nav-link" onClick={()=>scroll("skills")}>
                            <span>Skills</span>
                        </li>
                        <li className="nav-link" onClick={()=>scroll("experience")}>
                            <span>Experience</span>
                        </li>
                        <li className="nav-link" onClick={()=>scroll("projects")}>
                            <span>Projects</span>
                        </li>
                        <li className="nav-link" onClick={()=>scroll("contact")}>
                            <span>Contact</span>
                        </li>
                    </ul>
                </div>
                <div className="nav-icons" onClick={toggle}>
                    {isSidebar ? <HiMenuAlt3 /> : <AiOutlineClose />}
                </div>
            </div>
        </nav>
    )
}
export default Header;