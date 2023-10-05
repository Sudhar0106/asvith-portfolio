import React, { useEffect } from "react";
import Header from "../components/header";
import Lottie from "lottie-react";
import BannerGif from '../animation/banner1.json';
import { AiFillGithub } from 'react-icons/ai';

import Aos from 'aos';

const Home = () => {

    useEffect(() => {
        Aos.init({ once: true })
    })

    return (
        <div className="">
            <Header />
            <div className="main-content">
                <div className="bannerSec container">
                    <div className="row align-items-center">
                        <div className="col-md-7 text-center">
                            <div className="title">
                                <p>Hi there, i'm</p>
                                <p className="main-text">Asvith Venkat</p>
                                <div className="static-txts">
                                    <p>I'm into</p>
                                    <ul className="p-0 dynamix-txts">
                                        <li><span>web Development.</span></li>
                                        <li><span>React Development.</span></li>
                                        <li><span>Blockchain integration.</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-muted font-14">
                                <p>I am a MERN developer with 2 years of experience and astonishing skills.
                                    I'm always looking for new challenges, to push my skills to the next level.
                                </p>
                            </div>
                            <div className="social_link">
                                <a href="https://github.com/AsvithVenkat" target="_blank" data-aos="fade-left" data-aos-duration="200">
                                    <div className="icon">
                                        <AiFillGithub />
                                    </div>
                                </a>
                                <a href="https://github.com/AsvithVenkat" target="_blank" data-aos="fade-left" data-aos-duration="400">
                                    <div className="icon">
                                        <AiFillGithub />
                                    </div>
                                </a>
                                <a href="https://github.com/AsvithVenkat" target="_blank" data-aos="fade-left" data-aos-duration="600">
                                    <div className="icon">
                                        <AiFillGithub />
                                    </div>
                                </a>
                                <a href="https://github.com/AsvithVenkat" target="_blank" data-aos="fade-left" data-aos-duration="800">
                                    <div className="icon">
                                        <AiFillGithub />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <Lottie animationData={BannerGif} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;