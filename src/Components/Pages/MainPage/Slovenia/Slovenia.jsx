import React from "react";

import "./SloveniaStyle.scss";

import { useTranslation } from "react-i18next";

import Bank from "./icons/bank.png";
import Bussiness from "./icons/business.png";
import Education from "./icons/education.png";
import Eu from "./icons/eu.png";
import Family from "./icons/family.png";
import Living from "./icons/living.png";
import Safety from "./icons/safety.png";
import Visa from "./icons/visa.png";

export default function Slovenia(){
    const { t } = useTranslation();
    return(
        <div className="plusContainer">
            <span className="plusIcons">
                <span className="plus">
                    <img src={Bank} alt="desclogo" />
                    <h1>{t("mock.title")}</h1>
                    <p>{t("mock.question-long")}</p>
                </span>
                <span className="plus">
                    <img src={Bussiness} alt="desclogo"/>
                    <h1>{t("mock.title")}</h1>
                    <p>{t("mock.question-long")}</p>
                </span>
                <span className="plus">
                    <img src={Education} alt="desclogo"/>
                    <h1>{t("mock.title")}</h1>
                    <p>{t("mock.question-long")}</p>
                </span>
                <span className="plus">
                    <img src={Eu} alt="desclogo"/>
                    <h1>{t("mock.title")}</h1>
                    <p>{t("mock.question-long")}</p>
                </span>
                <span className="plus">
                <img src={Family} alt="desclogo"/>
                    <h1>{t("mock.title")}</h1>
                    <p>{t("mock.question-long")}</p>
                </span>
                <span className="plus">
                    <img src={Living} alt="desclogo"/>
                    <h1>{t("mock.title")}</h1>
                   <p>{t("mock.question-long")}</p>
                </span>
                <span className="plus">
                    <img src={Safety} alt="desclogo"/>
                    <h1>{t("mock.title")}</h1>
                    <p>{t("mock.question-long")}</p>
                </span>
                <span className="plus">
                    <img src={Visa} alt="desclogo"/>
                    <h1>{t("mock.title")}</h1>
                    <p>{t("mock.question-long")}</p>
                </span>
            </span>
        </div>
    )
}