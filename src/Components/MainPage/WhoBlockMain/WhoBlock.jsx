import React ,{useState} from "react";

import "./WhoBlockStyle.scss";

import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {motion , AnimatePresence} from "framer-motion";

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

    return(
       <div className="whoBlock">

           <h2 className="whoTitle">{t("main.forWho")}</h2>
           <motion.article
               className="variants"
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
               transition={{duration:0.5,}}
           >
               <AnimatePresence>
               {slide === 0 ? <motion.aside
                   className="variant variant1"
                   key="1"
                   initial={{x:-100}}
                   animate={{opacity:1,x:0}}
                   exit={{opacity:0,x:100,display:"none"}}
                   transition={{
                       duration: 0.5,
                   }}

               >
                   <span className="icon">
                        <FontAwesomeIcon icon={faBriefcase} size="2xl" style={{color: "#343742",}}/>
                   </span>
                   <article className="variantDesc variantDesc1">
                       <h4>{t("mock.title")}</h4>
                       <p>{t("mock.description-short")}</p>
                   </article>
               </motion.aside>
                   :
                   <motion.aside className="variant variant2"
                                 key="2"
                                 initial={{x:200,}}
                                 animate={{opacity:1,x:0}}
                                 exit={{opacity:0,display:"none"}}
                                 transition={{
                                     duration: 0.5,
                                 }}
                   >
                   <span className="icon">
                       <FontAwesomeIcon icon={faGraduationCap} size="2xl" style={{color: "#343742",}}/>
                   </span>
                       <article className="variantDesc variantDesc2">
                           <h4>{t("mock.title")}</h4>
                           <p>{t("mock.description-short2")}</p>
                       </article>
                   </motion.aside>
               }
                </AnimatePresence>
               <div className="variantsBtns">
                   <span className="arrLeft">
                        {slide===1 && <FontAwesomeIcon icon={faChevronLeft} size="xl" onClick={()=>handleMinus()}/>}
                   </span>
                   <span className="arrRight">
                        {slide===0 && <FontAwesomeIcon icon={faChevronRight} size="xl" onClick={()=>handlePlus()}/>}
                   </span>
               </div>
           </motion.article>
       </div>
    )
}