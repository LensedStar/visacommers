import React from "react";

import {useTranslation} from "react-i18next";

import "./FAQStyle.scss";

import Question from "../../Question/Question";


export default function FAQ() {
    const {t} = useTranslation();
    const questions = [
        {
            q:t("mock.question-short"),
            a:t("mock.description-long")
        },
        {
            q:t("mock.question-short"),
            a:t("mock.description-short")
        },
        {
            q:t("mock.question-long"),
            a:t("mock.description-short")
        },
        {
            q:t("mock.question-long"),
            a:t("mock.description-long")
        },
        {
            q:t("mock.question-short"),
            a:t("mock.description-long")
        },
        {
            q:t("mock.question-short"),
            a:t("mock.description-short")
        },
        {
            q:t("mock.question-long"),
            a:t("mock.description-short")
        },
        {
            q:t("mock.question-long"),
            a:t("mock.description-long")
        },
    ]
    return(
        <div className="faqPage">
            <div className="questionContainer">
                {questions.map((question,index) =>
                    <Question question={question.q} answer={question.a} key={index} />)}
            </div>
        </div>
    )
}