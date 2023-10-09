import { Fragment, useEffect } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BounceInDownButton } from "../animation/fadeup";
import Aos from "aos";


export const Professional = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    })

    const skills = [
        {
            stack: "Javascript",
            Knowledge: 70,
            text: "70%"
        },
        {
            stack: "Reactjs",
            Knowledge: 70,
            text: "70%"
        },
        {
            stack: "HTML/CSS",
            Knowledge: 60,
            text: "60%"
        },
        {
            stack: "NodeJs",
            Knowledge: 50,
            text: "50%"
        },
        {
            stack: "Blockchain integration",
            Knowledge: 70,
            text: "70%"
        },
        {
            stack: "Unity integration",
            Knowledge: 65,
            text: "65%"
        }
    ]

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <ul className="font-14">
                        <li>
                            Developing and maintaining web applications that are optimised for various devices and browsers
                        </li>
                        <li>
                            Implementing responsive design and cross-browser compatibility for different screen sizes.
                        </li>
                        <li>
                            Developing user-friendly and interactive web features such as buttons, forms, and menus Using JavaScript libraries and frameworks to build complex web applications and interactive features.
                        </li>
                        <li>
                            Writing and maintaining code that is clean, efficient, and easy to understand
                        </li>
                        <li>
                            Testing web applications to ensure they are bug-free and work seamlessly for the end-users.
                        </li>
                        <li>
                            Good understanding of SEO principles and ensuring that application will adhere to them.
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 skllCrd p-4">

                    <div className="row">
                        {skills.map((item, index) => (
                            <div className="col-4 skllSet" key={index}>
                                <div className="w-50" data-aos="zoom-in">
                                    <CircularProgressbar value={item.Knowledge} text={item.text} strokeWidth={5} />
                                    <p>{item.stack}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </Fragment>
    )
}