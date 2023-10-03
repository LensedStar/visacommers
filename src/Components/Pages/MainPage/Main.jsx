import React from "react";

import "./MainStyle.scss";

import MainAbout from "./About/MainAbout";

import Button from "../../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

import {motion} from "framer-motion";

import {Link} from "react-scroll"

import WhoBlock from "./WhoBlockMain/WhoBlock";

import ProcessBlock from "./ProcessBlock/ProcessBlock";
export default function Main() {
    const {t} = useTranslation();
    return(
        <>
        <main>
            <div className="bannerText">
                <h1>{t("main.title")}</h1>
                <h2>{t("mock.description-short")}</h2>
            </div>
            <Button content={t("navigation.apply")} style={
                {width: "300px",
                height: "50px"}
            } classN={"titleButton"}
            />
            <motion.div
                className="arrow"
                animate={{
                    y:-20
                }}
                transition={{
                    duration:.8,
                    repeat:Infinity,
                    repeatType:"reverse",
                    ease:"easeInOut"
                }}
            ><Link to="mainAbout"  smooth={true} offset={-40} duration={500} >
                <FontAwesomeIcon icon={faArrowDown} size="2xl" style={{color: "#ffffff"}}  />
            </Link>
            </motion.div>
        </main>
            <MainAbout />
            <WhoBlock />
            <ProcessBlock />
        </>
    )
}