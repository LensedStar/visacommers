import React from "react";

import "./MainStyle.scss";

import MainAbout from "./About/MainAbout";

import Button from "../../Button/Button";

import { useTranslation } from "react-i18next";




import ProcessBlock from "./ProcessBlock/ProcessBlock";

import ApplyForm from "../../Form/ApplyForm";

import Slovenia from "./Slovenia/Slovenia";

import {Link as NavLink} from "react-router-dom";
export default function Main() {
    const {t} = useTranslation();
    return(
        <>
        <main>
            <div className="banner">
            <div className="bannerText">
                <h1>{t("main.title")}</h1>
                <h2>{t("main.description")}</h2>
            </div>
            <Button content={<NavLink to="/aplication"><p className="navBtnText" >{t("navigation.apply")}</p></NavLink>} classN={"titleButton"}
            />
            </div>
        </main>
            <MainAbout />
            <Slovenia />
            <ProcessBlock />
            <ApplyForm />
        </>
    )
}