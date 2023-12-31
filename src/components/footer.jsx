import React, { useEffect } from "react";
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoLinkedin, BiLogoFacebookCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import Aos from 'aos';


export const Footer = () => {

    const emailAddress = 'email';

    useEffect(() => {
        Aos.init({ once: true })
    }, [])

    return (
        <footer>
            <section className="footer">
                <div className="container">
                    <div className="footer-sec my-4">
                        <div className="col-md-5 font-14">
                            <div className="footerLg">
                                {/* <img src={logo} className="img-fluid m-2" /> */}
                                <span>Asvth</span>
                            </div>
                            <p>
                                I declare that the information in this portfolio is true to the best of my knowledge and belief.
                            </p>
                        </div>
                        <div className="social_link my-5">
                            <a href="https://github.com/Sudhar0106" target="_blank" data-aos="fade-down" data-aos-duration="200">
                                <div className="icon">
                                    <AiFillGithub />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/sudharsan-s-7647a81b5" target="_blank" data-aos="fade-down" data-aos-duration="400">
                                <div className="icon">
                                    <BiLogoLinkedin />
                                </div>
                            </a>
                            <a href="https://github.com/Sudhar0106" target="_blank" data-aos="fade-down" data-aos-duration="600">
                                <div className="icon">
                                    <BiLogoFacebookCircle />
                                </div>
                            </a>
                            <a href="https://instagram.com/sudharsan_2704?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" data-aos="fade-down" data-aos-duration="800">
                                <div className="icon">
                                    <AiOutlineInstagram />
                                </div>
                            </a>
                            <a href={`https://mail.google.com/mail/u/0/?fs=1&to=${emailAddress}&su=SUBJECT&body=BODY&bcc=${emailAddress}&tf=cm`} target="_blank" data-aos="fade-down" data-aos-duration="1000">
                                <div className="icon">
                                    <HiOutlineMail />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}