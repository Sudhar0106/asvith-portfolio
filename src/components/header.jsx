import React, { useState } from "react";
import './style.scss';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {

    const [isSidebar, setisSidebar] = useState(true);
    const toggle = () => {
        let body = document.getElementById("MobView")
        setisSidebar(!isSidebar)
        body.classList.toggle("responsiv")
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-brand">
                    <a href="#">Asvith</a>
                </div>
                <div id="MobView">
                    <ul className="nav-item m-0">
                        <li className="nav-link">
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-link">
                            <a href="#">About me</a>
                        </li>
                        <li className="nav-link">
                            <a href="#">Skills</a>
                        </li>
                        <li className="nav-link">
                            <a href="#">Experience</a>
                        </li>
                        <li className="nav-link">
                            <a href="#">Projects</a>
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