import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import "./HeaderStyle.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faBars,faX,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Drawer } from '@mui/material';

import {useTranslation} from "react-i18next";

import SelectLocale from "./SelectLocale";

import Button from "../Button/Button";

export default function Header() {
    const [open, setOpen] = useState(false);
    const {t,} = useTranslation();

    const handleDropDown = () => {
        setOpen(!open);
    };

    const [theme, setTheme] = useState('light')
    useEffect(() =>
    {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
            setTheme('dark')
    },[])
    return(
        <nav className="nav">
            {theme === 'light' && <><p>Light</p></> || theme === 'dark' && <><p>Dark</p></>}
            <SelectLocale />
           <button className="dropDownButton" onClick={()=>handleDropDown()}>
            <FontAwesomeIcon className="DropDown" icon={faBars} size="xl" style={{color:"black"}}/>
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
                        <Link to="/"  ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.main")}</p></Link>
                        <Link to="/visa" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.resident-card")}</p></Link>
                        <Link to="/aplication" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.aplications")}</p></Link>
                        <Link to="/questions" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.questions")}</p></Link>
                        <Link to="/pricement" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.pricement")}</p></Link>
                        <Link to="/about" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.about")}</p></Link>
                    </span>
                    <button className="dropDownButton" onClick={()=>handleDropDown()}>
                        <FontAwesomeIcon icon={faX} size="xl" style={{color:"black"}}/>
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
                        <Button
                            content={<Link to="/aplication"><p className="navBtnText" >{t("navigation.apply")}</p></Link>}
                            style={{
                                alignSelf : "center",
                                marginTop:"40px"
                        }}
                            classN="navBtn"
                            action={()=>handleDropDown()}
                        />
                    </article>
                </div>
            </Drawer>
        </nav>
    )
}