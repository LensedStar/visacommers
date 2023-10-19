import React from "react";

import { motion } from "framer-motion";

import {useTranslation} from "react-i18next";

import {Link} from "react-router-dom";

import "./MainAboutStyle.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function MainAbout() {
const {t} = useTranslation();
    return(
        <div className="about" id="mainAbout">
                <motion.div
                    key={1}
                    className="aboutText aboutText1"
                    initial={{
                        opacity:0,
                        x:-200
                    }}
                    whileInView={{
                        opacity:1,
                        x:0,
                    }}
                    transition={{
                        duration:1.5,
                    }}
                    viewport={{once:true}}
                >
                    <span>
                        <h2>{t("mock.title")}</h2>
                         <ul>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                        </ul>
                    </span>
                    <Link to="/business">
                        <span className="aboutLink">
                            <p className="aboutLinkTitle">{t("about.learnMore")}</p>
                            <FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#000000",}} />
                        </span>
                    </Link>
                </motion.div>

            <motion.div
                key={2}
                className="aboutText aboutText2"
                initial={{
                    opacity:0,
                    x:200
                }}
                whileInView={{
                    opacity:1,
                    x:0,
                }}
                transition={{
                    duration:1.8,
                }}
                viewport={{once:true}}
            >
                 <span>
                        <h2>{t("mock.title")}</h2>
                          <ul>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                        </ul>
                 </span>
                <Link to="/high_education">
                        <span className="aboutLink">
                            <p className="aboutLinkTitle">{t("about.learnMore")}</p>
                            <FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#000000",}} />
                        </span>
                </Link>
            </motion.div>

            <motion.div
                key={3}
                className="aboutText aboutText1 aboutText3"
                initial={{
                    opacity:0,
                    x:-200
                }}
                whileInView={{
                    opacity:1,
                    x:0,
                }}
                transition={{
                    duration:2.1,
                }}
                viewport={{once:true}}
            >
               <span>
                        <h2>{t("mock.title")}</h2>
                        <ul>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                            <li>{t("mock.title")}</li>
                        </ul>
               </span>
                <Link to="/middle_education">
                        <span className="aboutLink">
                            <p className="aboutLinkTitle">{t("about.learnMore")}</p>
                            <FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#000000",}} />
                        </span>
                </Link>
            </motion.div>

        </div>
    )
}