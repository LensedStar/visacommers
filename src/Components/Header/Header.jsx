import React,{useState} from "react";

import {Link} from "react-router-dom";

import "./HeaderStyle.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faBars,faX,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Drawer } from '@mui/material';

import {useTranslation} from "react-i18next";

import SelectLocale from "./SelectLocale";

export default function Header() {
    const [open, setOpen] = useState(false);
    const {t,} = useTranslation();

    const handleDropDown = () => {
        setOpen(!open);
    };
    return(
        <nav className="nav">
            <SelectLocale />
           <button className="dropDownButton" onClick={()=>handleDropDown()}>
            <FontAwesomeIcon className="DropDown" icon={faBars} size="xl"/>
           </button>
            <Drawer anchor="right" open={open} onClose={()=>handleDropDown()}
                    PaperProps={{

                        sx: {
                            height:"100vh",
                            backgroundColor:"rgba(255, 255, 255,1)",
                        }
                    }} >
                <div className="Navigation">
                    <article className="linksContainer">
                    <span className="navLinks">
                        <Link to="/"  ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.home")}</p></Link>
                        <Link to="/about" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.about")}</p></Link>
                        <Link to="/something" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.something")}</p></Link>
                    </span>
                    <button className="dropDownButton" onClick={()=>handleDropDown()}>
                        <FontAwesomeIcon icon={faX} size="xl"/>
                    </button>
                    </article>
                    <article className="contacts">
                        <span className="number">
                            <FontAwesomeIcon icon={faPhone} size="lg"/>
                            <a href="tel:+386 99 999 99 99">+380 99 999 99 99</a>
                        </span>
                        <span className="mail">
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                            <a href = "mailto: abc@example.com">adc@example.com</a>
                        </span>
                        <button className="applyNow">
                            {t("navigation.apply")}
                        </button>
                    </article>
                </div>
            </Drawer>
        </nav>
    )
}