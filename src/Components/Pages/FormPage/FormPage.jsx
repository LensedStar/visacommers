import React from "react";

import "./FormPageStyle.scss";

import {useTranslation} from "react-i18next";

import Form from "../../Form/ApplyForm";


export default function FormPage() {
    const {t} = useTranslation();
    return(
        <div className="formPage">
            <h1 className="formTitle">{t("mock.title")}</h1>
            <p className="form-desc">{t("mock.short-description ")}</p>
            <div className="formContainer">
                <Form />
            </div>
        </div>
    )
}