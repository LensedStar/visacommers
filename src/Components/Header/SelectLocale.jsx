import React, {useState} from "react";

import { FormControl,Select,MenuItem } from '@mui/material';

import {useTranslation} from "react-i18next";

import ukFlag from "./images/ukFlag.png";

import rusFlag from "./images/rusFlag.png";

import uaFlag from "./images/uaFlag.png";
import { motion } from "framer-motion";
import {useScroll,useMotionValueEvent} from "framer-motion";


export default function SelectLocale() {
    const [lang,setLang] = useState(localStorage.getItem("lang")?localStorage.getItem("lang"):"en");
    const {i18n} = useTranslation();
    const handleChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem("lang",event.target.value);
        i18n.changeLanguage(event.target.value)
    }
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
             visible:{height:40}
         }}
         animate={showSelector ? "hidden":"visible" }
            transition={{
                duration: .5,
            }}
     >
         <FormControl>
           <Select
           value = {lang}
           onChange={handleChange}
           sx={{
               width:90,
               height:40
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