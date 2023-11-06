{/*TODO: ADD LINK */}

import React, {useState, useRef, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {motion, AnimatePresence} from "framer-motion";
import {useInView} from "framer-motion";

import Button from "../../../Button/Button";


import iconB from "./MainAbouIMG/busi.svg"
import iconM from "./MainAbouIMG/middle.svg"
import iconH from "./MainAbouIMG/hight.svg"

import businessImage from "./MainAbouIMG/mainAboutImageBussines.svg"

import "./MainAboutStyle.scss"


export default function MainAbout() {
    const {t} = useTranslation()
    const slides = [
        {
            title:t("main.about.title1"),
            description:t("main.about.desc1")
        },
        {
            title: t("main.about.title2"),
            description: t("main.about.desc2")
        },
      {
            title:t("main.about.title3"),
            description:t("main.about.desc3")
      }
    ]
    const [slide, setSlide] = useState(0)
   // const [click, setClick] = useState(false)
    const ref = useRef(null);
    const isInView = useInView(ref)

    useEffect(() => {
        if(isInView){
            changeSlide()
        }}
        ,[isInView]);


    const changeSlide = () =>{
            setInterval(()=>{
                setSlide(prevState => prevState < 2 ? prevState + 1 : 0)
            },6000)
        }
        const variants = {
            changeColor:{
                backgroundPosition:"0"
            }
        }

    return(
        <section ref={ref} className="main_about_block">
            <article className="main_about_desc_block">
                <h1 className="main_about_header">{slides[slide].title}</h1>
                <p className="main_about_desc">{slides[slide].description}</p>
                {/*TODO: ADD LINK */}
                <Button btnVariant="black" content={<p>{t("main.about.button")}</p>} />
            </article>
            <article className="main_about_picture">
                <img src={businessImage} alt="businessman picture" className="main_about_img"/>
                <div className="main_about_type_btns">
                    <AnimatePresence mode="wait">
                    {slide === 0 ?
                    <motion.button onClick={()=>setSlide(0)}
                                   key="selected"
                            className="main_select_btn_selected"
                                   variants={variants}
                                   animate={slide === 0 && "changeColor"}
                                   transition={{
                                       duration:5
                                   }}
                                   exit={{
                                       width:40,
                                       opacity:.1,
                                       backgroundColor:"#fff",
                                        transition: {
                                           duration:.5
                                        }
                        }}

                    >
                        <p>{slides[0].title}</p>
                    </motion.button>
                        :
                        <motion.button className="main_select_btn"
                                       key="unselected"
                                       exit={{
                                           width:160,
                                           transition:{
                                               duration:.1
                                           }}}
                        >
                            <img src={iconH} alt="icon"/>
                        </motion.button>
                    }
                    </AnimatePresence>
                    {slide === 1 ?
                        < motion.button
                            variants={variants}
                            animate={slide === 1 && "changeColor"}
                            transition={{
                                duration:5
                            }}
                            className = "main_select_btn_selected"
                        >
                            <p> {slides[1].title} </p>
                        </motion.button>
                        :
                        <button className="main_select_btn">
                            <img src={iconM} alt="icon"/>
                        </button>
                    }
                    {slide === 2 ?
                        <motion.button onClick={()=>setSlide(0)}
                                       className="main_select_btn_selected"
                                       variants={variants}
                                       animate={slide === 2 && "changeColor"}
                                       transition={{
                                           duration:5

                                       }}
                        >
                            <p>{slides[2].title}</p>
                        </motion.button>
                        :
                        <button className="main_select_btn">
                            <img src={iconB} alt="icon"/>
                        </button>
                    }
                </div>
            </article>
        </section>
    )
}