import React from "react";

import "./MainStyle.scss";

import MainAbout from "./About/MainAbout";

import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

import {useTranslation} from "react-i18next";
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
            } />
            <span className="arrow">
                <FontAwesomeIcon icon={faArrowDown} size="2xl" style={{color: "#ffffff"}} />
            </span>
        </main>
            <MainAbout />
        </>
    )
}