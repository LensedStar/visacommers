import React from 'react';

import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFilePen,faUserTie,faIdCard } from '@fortawesome/free-solid-svg-icons';

import {motion} from "framer-motion";

import './ProcessBlockStyle.scss';

export default function ProcessBlock(){
    const {t} = useTranslation();
    return(
        <div className="processBlock">
        <h2>{t("process.title")}</h2>
            <motion.span
                className="process process1"
                initial={{
                    opacity: 0,
                    y: -50,

                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once:true}}
            >
                <span className="processIcon">
                    <FontAwesomeIcon icon={faFilePen} size="2xl" style={{color: "#ffffff",}} />
                </span>
                <span className="processText">
                    <h3>{t("mock.title")}</h3>
                    <p>{t("mock.description-short")}</p>
                </span>
            </motion.span>
            <motion.span
                className="process process2"
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                transition={{
                    duration: 1,
                    delay: .5,
                }}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once:true}}
            >
                <span className="processIcon">
                    <FontAwesomeIcon icon={faUserTie} size="2xl" style={{color: "#ffffff",}} />
                </span>
                <span className="processText">
                    <h3>{t("mock.title")}</h3>
                    <p>{t("mock.description-short")}</p>
                </span>
            </motion.span>
            <motion.span
                className="process process3"
                initial={{
                    opacity: 0,
                    y: -100,

                }}
                transition={{
                    duration: 1,
                    delay:1,
                }}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once:true}}
            >
                <span className="processIcon">
                    <FontAwesomeIcon icon={faIdCard} size="2xl" style={{color: "#ffffff",}} />
                </span>
                <span className="processText">
                    <h3>{t("mock.title")}</h3>
                    <p>{t("mock.description-short")}</p>
                </span>
            </motion.span>
        </div>
    )
}