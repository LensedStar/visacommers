import React from "react";

import "./FormPageStyle.scss";

import {useTranslation} from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faListCheck,faBriefcase,faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Form from "../../Form/ApplyForm";





export default function FormPage() {
    const {t} = useTranslation();
    return(
        <div className="formPage">
            <div className="checkList">
                <div className="checkListTitle">
                    <FontAwesomeIcon icon={faListCheck} size="xl" style={{color: "#000000",}} />
                    <h2 className="checklistTitle">{t("form.neeed-documents")}</h2>
                </div>
                <div className="checkListsBlock">
                <div className="checkListItems vType1">
                    <span className="itemsTitle">
                        <FontAwesomeIcon icon={faBriefcase} size="lg" style={{color:"#000000"}} />
                        <p className="checkVisaType">{t("mock.title")}</p>
                    </span>
                    <ul className="dockList">
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                    </ul>
                </div>
                <div className="checkListItems vType2">
                    <span className="itemsTitle">
                        <FontAwesomeIcon icon={faGraduationCap} size="lg" style={{color:"#000000"}} />
                        <p className="checkVisaType">{t("mock.title")}</p>
                    </span>
                    <ul className="dockList" >
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                        <li>{t("mock.title")}</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="formContainer">
                <Form />
            </div>
        </div>
    )
}