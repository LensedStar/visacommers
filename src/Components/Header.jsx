import React from "react";
import {Link} from "react-router-dom";

import "./HeaderStyle.scss";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars,faX } from '@fortawesome/free-solid-svg-icons';

import { Drawer } from '@mui/material';

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleDropDown = () => {
        setOpen(!open);
    }

    return(
        <nav className="nav">
           <button className="dropDownButton" onClick={()=>handleDropDown()}>
            <FontAwesomeIcon className="DropDown" icon={faBars} size="xl"/>
           </button>
            <Drawer anchor="top" open={open} onClose={()=>handleDropDown()}
                    PaperProps={{

                        sx: {
                            height:"20vh",
                            backgroundColor:"rgba(255, 255, 255,1)",
                        }
                    }} >
                <div className="Navigation">
                    <span className="navLinks">
                        <Link to="/"  ><p onClick={()=>handleDropDown()} className="navLink">Home</p></Link>
                        <Link to="/about" ><p onClick={()=>handleDropDown()} className="navLink">About</p></Link>
                        <Link to="/something" ><p onClick={()=>handleDropDown()} className="navLink">Something</p></Link>
                    </span>

                    <button className="dropDownButton" onClick={()=>handleDropDown()}>
                        <FontAwesomeIcon icon={faX} size="xl"/>
                    </button>
                </div>
            </Drawer>
        </nav>
    )
}