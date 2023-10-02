import React from "react";

import { motion } from "framer-motion";

import {useTranslation} from "react-i18next";

import "./MainAboutStyle.scss";

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
                        zIndex:-1000,
                        x:0,
                    }}
                    transition={{
                        duration:1,
                    }}
                    viewport={{once:true}}
                >
                    <h2>{t("mock.title")}</h2>
                    <p>
                        {t("mock.description-short")}
                    </p>
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
                    zIndex:-1000,
                    x:0,
                }}
                transition={{
                    duration:1,
                    delay:.2,
                }}
                viewport={{once:true}}
            >
                <h2>{t("mock.title")}</h2>
                <p>
                    {t("mock.description-short")}
                </p>
            </motion.div>

            <motion.div
                key={3}
                className="aboutText aboutText1"
                initial={{
                    opacity:0,
                    x:-200
                }}
                whileInView={{
                    opacity:1,
                    zIndex:-1000,
                    x:0,
                }}
                transition={{
                    duration:1,
                    delay:.5,
                }}
                viewport={{once:true}}
            >
                <h2>{t("mock.title")}</h2>
                <p>
                    {t("mock.description-short")}
                </p>
            </motion.div>

        </div>
    )
}