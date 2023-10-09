import React, { useEffect } from "react";
import Header from "../components/header";
import Lottie from "lottie-react";
import BannerGif from '../animation/banner1.json';
import Aboutme from '../assets/aboutme.png';
import { AiFillGithub } from 'react-icons/ai';

import Aos from 'aos';
import { Professional } from "./professionalsk";
import { BounceInDownButton } from "../animation/fadeup";
import { Experience } from "./experience";
import { Projects } from "./projects.jsx";
import { SkillList } from "./skills";
import { ContactMe } from "./contact";
import { Footer } from "../components/footer";

const Home = () => {

    useEffect(() => {
        Aos.init({ once: true })
    })

    return (
        <div className="">
            <Header />
            <div className="main-content">
                <div className="bannerSec">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7 text-center">
                                <BounceInDownButton>
                                    <div className="title">
                                        <p>Hey there, i'm</p>
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
                                </BounceInDownButton>
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


                <div className="about-me container my-5" id="aboutme">
                    <div className="row">
                        <div className="d-none d-md-block col-md-6 text-center">
                            <img src={Aboutme} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <BounceInDownButton>
                                <div className="heading">
                                    <span className="font-12">Get To Know</span>
                                    <h2>About Me</h2>
                                </div>
                            </BounceInDownButton>
                            <div className="font-14">
                                <p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a skilled front-end developer experienced in creating visually stunning and user-friendly websites and applications expertise in HTML, CSS, SASS, JavaScript, reactjs and various front-end frameworks. I develop dynamic and responsive interfaces that meet client needs. With a deep understanding of front-end development best practices, I am an innovative developer experienced in Reactjs.</p>

                                <p>Also, Worked on De-centralized projects utilizing the knowledge of Blockchain & unity integration such as Swap, Liquidity, Stake, NFT, voting, proposal, gaming etc,.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="professional container py-4" id="skills">
                    <BounceInDownButton>
                        <div className="heading">
                            <span className="font-12">Know About My</span>
                            <h2>Professional Skills</h2>
                        </div>
                    </BounceInDownButton>
                    <Professional />
                </div>
                <hr />

                <section id="experience" className="animated_div">
                    <Experience />
                </section>
                <hr />

                <section id="projects" className="animated_div">
                    <Projects />
                </section>
                <hr />

                <section id="skills" className="sectionThree">
                    <SkillList />
                </section>
                <hr />

                <div className="cntct-sec py-4" id="contact">
                    <div className="container">
                        <BounceInDownButton>
                            <div className="heading">
                                <span className="font-12">Know About My</span>
                                <h2>Contact</h2>
                            </div>
                        </BounceInDownButton>
                        <ContactMe />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;