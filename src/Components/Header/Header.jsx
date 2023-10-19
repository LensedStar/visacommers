import React, {useState} from "react";

import {Link} from "react-router-dom";

import "./HeaderStyle.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBars, faX, faPhone, faEnvelope, faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {Drawer} from '@mui/material';

import {useTranslation} from "react-i18next";

import SelectLocale from "./SelectLocale";

import Button from "../Button/Button";

import Logo from "./images/HeaderLogo.png";

import {motion} from "framer-motion";


export default function Header() {
    const [open, setOpen] = useState(false);
    const {t,} = useTranslation();
    const handleDropDown = () => {
        setOpen(!open);
    };

   /* const [theme, setTheme] = useState('light')*/
   /* seEffect(() =>
    {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
            setTheme('dark')
    },[])*/

    const [showLinks, setShowLinks] = useState(false);

    return(
        <header>
        <nav className="nav">
            <span className="localenLogo">
            <span className="headerLogo">
                <Link to="/">
                    <img className="headerLogoImg" alt="logo" src={Logo}/>
                </Link>
                <p className="LogoText">GAMASRON INC.</p>
            </span>
            </span>
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
                        <Link to="/" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.main")}</p></Link>
                        <Link to="/business" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.business")}</p></Link>
                        <span className="navDropdown" onClick={()=>setShowLinks(!showLinks)}>
                            <span className="navDropdownButton">
                                <p role="button" className="navLink " >{t("navigation.study")}</p>
                                  <motion.span
                                      className="navDropdownButtonArrow"
                                      variants={{
                                          rotate:{rotate: 180},
                                          stop:{rotate: 0}
                                      }}

                                      type="button"
                                      whileTap={{scale: 1.8}}
                                      animate={showLinks ? "rotate" : "stop"}
                                      transition={{
                                          type:"tween",
                                          duration: .5,
                                      }}
                                  >
                    <FontAwesomeIcon icon={faAngleDown}  style={{color: "#000000"}} />
                </motion.span>
                            </span>
                            <motion.div
                                className="navDropdownLinks"
                                variants={{
                                    open: { height: "fit-content", opacity:1},
                                    closed: { height:0, opacity:0, margin:0}
                                }}
                                transition={{
                                    type:"linear",
                                    duration: .5,
                                }}
                                animate={showLinks ? "open" : "closed"}
                            >
                                        <>
                                        <Link to="/middle_education" ><p onClick={()=>handleDropDown()} className="navLink navLinkDropDown navLinkDropDown1">{t("navigation.middle")}</p></Link>
                                        <Link to="/high_education" ><p onClick={()=>handleDropDown()} className="navLink navLinkDropDown navLinkDropDown2">{t("navigation.high")}</p></Link>
                                        </>
                            </motion.div>
                        </span>
                        <Link to="/additionalservises" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.additional")}</p></Link>
                        <Link to="/about" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.about")}</p></Link>
                        <Link to="/faq" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.questions")}</p></Link>
                        <Link to="/contacts" ><p onClick={()=>handleDropDown()} className="navLink">{t("navigation.contacts")}</p></Link>
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
        <SelectLocale />
        </header>
    )
}