import React ,{useState} from "react";

import "./WhoBlockStyle.scss";


import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {motion , AnimatePresence} from "framer-motion";

import { faBriefcase,faGraduationCap,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";

import Button from "../../../Button/Button";

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
               viewport={{once:true}}
           >
               <AnimatePresence mode="wait">
               {slide === 0 ? <motion.aside
                   className="variant variant1"
                   key="1"
                   initial={{opacity:0,x:-100}}
                   animate={{opacity:1,x:0}}
                   exit={{opacity:0,x:100}}
                   transition={{
                       duration: 0.3,
                   }}

               >
                   <span className="icon">
                        <FontAwesomeIcon icon={faBriefcase} size="2xl" style={{color: "#343742",}}/>
                   </span>
                   <article className="variantDesc variantDesc1">
                       <h4>{t("mock.title")}</h4>
                       <p>{t("mock.description-short")}</p>
                   </article>
                  <Button content={
                      <Link className="Wholink" to="/about">{t("main.learnMore")}</Link>
                  } style={{
                      alignSelf : "center",
                      backgroundColor:"#8ea9ae",
                  }} classN="linkWhoButton"/>
               </motion.aside>
                   :
                   <motion.aside className="variant variant2"
                                 key="2"
                                 initial={{opacity:0,x:-100}}
                                 animate={{opacity:1,x:0}}
                                 exit={{opacity:0,x:100}}
                                 transition={{
                                     duration: 0.3,
                                     type:"spring",
                                 }}
                   >
                   <span className="icon">
                       <FontAwesomeIcon icon={faGraduationCap} size="2xl" style={{color: "#343742"}}/>
                   </span>
                       <article className="variantDesc variantDesc2">
                           <h4>{t("mock.title")}</h4>
                           <p>{t("mock.description-short2")}</p>
                       </article>
                       <Button content={
                           <Link className="Wholink" to="/about">{t("main.learnMore")}</Link>
                       } style={{
                           alignSelf : "center",
                           backgroundColor:"#8ea9ae",
                       }} classN="linkWhoButton"/>
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