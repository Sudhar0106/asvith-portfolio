import React, { useEffect, useState } from "react";
import { Card, CardBody, Modal, ModalBody } from "reactstrap";
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Aos from 'aos';
import { BounceInDownButton } from "../animation/fadeup";

// image
import Noimage from '../assets/noimage.jpg';
// import Afrigomall from '../../assets/projects/afrigo-mall.png';
// import Dexa from '../../assets/projects/dexa.png';
// import binasea from '../../assets/projects/binase.png';
// import livescores from '../../assets/projects/livescore.png';
// import neobank from '../../assets/projects/neobank.png';
// import rico from '../../assets/projects/rico.png';
// import Bowo from '../../assets/projects/bowo.png';
// import Green from '../../assets/projects/green.png';
// import Ludo from '../../assets/projects/ludo.png';

export const Projects = () => {

    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);

    const toggle = list => {
        setOpen(!open)
        setSelected(list);
    }

    useEffect(() => {
        Aos.init({ once: true })
    })

    const projectList = [
        {
            title: "Dexa NFT",
            link: "https://nft.dexa.exchange/",
            image: "Dexa",
            concept: "A simple NFT project where the user can Create, BUY and SELL their NFT's",
            stack: "Reactjs | HTML | CSS | SASS | Redux | Sagas | Contract integration | Metamask.",
            details: "A user can create, buy, sell & bid their NFT's. Each NFT has an unique signer to track their activities on blockchain, which is Dexa network. The coin initiated on it to buy & bidding purpose is BFIC and their respective token WBFIC (ETH - Erc20)."
        },
        {
            title: "Binasea NFT",
            link: "https://binaseafront.osiztech.com/",
            image: "binasea",
            concept: "A simple NFT project where the user can BUY and SELL their NFT's",
            stack: "Reactjs | HTML | CSS | SASS | Redux | Sagas | Contract integration | Metamask.",
            details: "Admin will create an NFT signer hash on particular collection and a user can Buy & Sell their owned NFT's bought from Admin. The NFT transactions are tracked using phantom & solflaire wallet, each time the NFT is being configured it's Market increases gradually on thecontract."
        },
        {
            title: "Live-scores",
            link: "https://livescores.osiztech.com/",
            image: "livescores",
            concept: "Instant update of certain sport scores, news, match status.",
            stack: "Reactjs | HTML | CSS | SASS | SSR | rapid API (3rd party) | i18next | Metamask",
            details: "It's a sports score updation project, which we use third party known as rapid API for an instant update of a result. Here we integrated 9 different games. It features news, articles and live coverage a matches including videos, text commentary, player stats, team rankings and odd values etc..,"
        },
    ]

    return (
        <div className="container">
            <div className="heading">
                <span className="text-muted">Visit my</span>
                <BounceInDownButton>
                    <h2>Projects</h2>
                </BounceInDownButton>
            </div>
            <div className="row">
                {projectList.map((list, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Card className="prjct">
                            <CardBody>
                                <BounceInDownButton>
                                    <p className="m-0 prtitle">{list.title}</p>
                                </BounceInDownButton>
                                <div className="prjctImg" data-aos="zoom-in" data-aos-duration="600">
                                    <img src={list.image || Noimage} className="img-fluid" />
                                </div>
                                <p className="font-14">{list.concept}</p>
                                <p className="font-12">{list.stack}</p>

                                <div className="my-4">
                                    <BounceInDownButton>
                                        <button className="secondaryBtn w-100" onClick={() => toggle(list)}>
                                            Show more <BsArrowRight />
                                        </button>
                                    </BounceInDownButton>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>

            <Modal isOpen={open} centered size="lg">
                <ModalBody className="card">
                    <div className="">

                        <div className="d-flex justify-content-between">
                            <BounceInDownButton>
                                <div className="heading">
                                    <h2>{selected?.title}</h2>
                                </div>
                            </BounceInDownButton>
                            <button className="closeBtn" onClick={() => toggle(null)}>X</button>
                        </div>
                        <hr />

                        <div className="mdlDetail">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={selected?.image || Noimage} className="img-fluid" />
                                </div>
                                <div className="col-md-8">
                                    <h4>Concept</h4>
                                    <p>{selected?.concept}</p>
                                </div>
                            </div>
                            <h4>Details</h4>
                            <p>{selected?.details}</p>
                            <h4>Work Stack</h4>
                            <p>{selected?.stack}</p>

                            <div className="my-4 text-center">
                                <a className="secondaryBtn mx-2" href={selected?.link} target="_blank">
                                    View Demo <BsArrowUpRight />
                                </a>
                                <button className="primaryBtn mx-2" onClick={() => toggle(null)}>
                                    Close <AiOutlineCloseCircle />
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}