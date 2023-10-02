import React ,{useState} from "react";

import "./WhoBlockStyle.scss";

import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBriefcase,faGraduationCap,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function WhoBlock() {
const {t} = useTranslation();
const [slide, setSlide] = useState(0);
const handlePlus = () => {
    slide === 0 ? setSlide(1) : setSlide(0);
}
const handleMinus = () => {
    slide === 1 ? setSlide(0) : setSlide(1);
}

const handleSlide = () => {
    if (slide === 0) {
        return (
            <aside className="variant variant1">
                   <span className="icon">
                        <FontAwesomeIcon icon={faBriefcase} size="2xl" style={{color: "#343742",}}/>
                   </span>
                <article className="variantDesc variantDesc1">
                    <h4>{t("mock.title")}</h4>
                    <p>{t("mock.description-short")}</p>
                </article>
            </aside>
        )
    } else if (slide === 1) {
        return (
            <aside className="variant variant2">
                   <span className="icon">
                       <FontAwesomeIcon icon={faGraduationCap} size="2xl" style={{color: "#343742",}}/>
                   </span>
                <article className="variantDesc variantDesc2">
                    <h4>{t("mock.title")}</h4>
                    <p>{t("mock.description-short2")}</p>
                </article>
            </aside>
        )
    }
}
    return(
       <div className="whoBlock">
           <h2 className="whoTitle">{t("main.forWho")}</h2>
           <article className="variants">
               {
                     handleSlide()
               }
               <div className="variantsBtns">
                   <FontAwesomeIcon icon={faChevronLeft} size="xl" onClick={()=>handleMinus()}/>
                   <FontAwesomeIcon icon={faChevronRight} size="xl" onClick={()=>handlePlus()}/>
               </div>
           </article>
       </div>
    )
}