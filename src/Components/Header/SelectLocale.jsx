import React, {useEffect, useState} from "react";

import { FormControl,Select,MenuItem } from '@mui/material';

import {useTranslation} from "react-i18next";

import ukFlag from "./images/ukFlag.png";

import rusFlag from "./images/rusFlag.png";

import uaFlag from "./images/uaFlag.png";
import { motion } from "framer-motion";
import {useScroll,useMotionValueEvent} from "framer-motion";


export default function SelectLocale() {
    const [lang,setLang] = useState(localStorage.getItem("lang"))

    const {i18n,t} = useTranslation();

    const handleChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem("lang",event.target.value);
        i18n.changeLanguage(event.target.value)
    };

    useEffect(()=>{
        if(!localStorage.getItem("lang")){
        if(navigator.language === "ru-RU"){
            localStorage.setItem("lang","ru");
            i18n.changeLanguage("ru")
        }else if(navigator.language === "uk-UA"){
            localStorage.setItem("lang","ua");
            i18n.changeLanguage("ua")
        }else{
            localStorage.setItem("lang","en");
            i18n.changeLanguage("en")
        }
        }
    },[])

    const [showSelector,setShowSelector] = useState(false)
    const {scrollY} = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        latest > 500 ? setShowSelector(true) : setShowSelector(false)
    })
    return(
     <motion.div
         className="localSelector"
         variants={{
             hidden:{height:0},
             visible:{height:50}
         }}
         animate={showSelector ? "hidden":"visible" }
            transition={{
                duration: .5,
            }}
     >
         <p className="langTitle">{t("navigation.selectLang")}</p>
         <FormControl>
           <Select
           value = {lang}
           onChange={handleChange}
           sx={{
               width:90,
               height:50,
               marginLeft:"5px"
           }}
           >
               <MenuItem value="en"
               >
                   <span className="langSelector">
                       <img src={ukFlag} alt="ukFlag" className="flagImg"/>
                       <p>UK</p>
                   </span>
                   </MenuItem>
               <MenuItem value="ru">
                   <span className="langSelector">
                       <img src={rusFlag} alt="rusFlag" className="flagImg"/>
                       <p>RU</p>
                   </span></MenuItem>
               <MenuItem value="ua">
                   <span className="langSelector">
                       <img src={uaFlag} alt="uaFlag" className="flagImg"/>
                       <p>UA</p>
                   </span>
               </MenuItem>
           </Select>
         </FormControl>
     </motion.div>
    )
}