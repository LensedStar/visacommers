import React,{useState} from "react";

import { FormControl,Select,MenuItem } from '@mui/material';

import {useTranslation} from "react-i18next";

import ukFlag from "./flags/ukFlag.png";

import rusFlag from "./flags/rusFlag.png";

import uaFlag from "./flags/uaFlag.png";


export default function SelectLocale() {
    const [lang,setLang] = useState(localStorage.getItem("lang")?localStorage.getItem("lang"):"en");
    const {i18n} = useTranslation();
    const handleChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem("lang",event.target.value);
        i18n.changeLanguage(event.target.value)
    }

    return(
     <div className="localSelector">
         <FormControl>
           <Select
           value = {lang}
           onChange={handleChange}>
               <MenuItem value="en">
                   <span className="langSelector">
                       <img src={ukFlag} alt="ukFlag" className="flagImg"/>
                       <p>EN</p>
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
     </div>
    )
}