import React from "react";
import "./MainStyle.scss";
import MainAbout from "./About/MainAbout";

import Button from "../Button/Button";
export default function Main() {
    return(
        <>
        <main>
            <div className="bannerText">
                <h1>Визы в словению</h1>
                <h2>Тут будеь чтото написано on all lang. Крутой слоган что всем захочется с нами поговрить ОГО</h2>
            </div>
            <Button content={"ПОДАТЬ ЗАЯВКУ"} style={
                {width: "300px",
                height: "50px"}
            } />
        </main>
            <MainAbout />
        </>
    )
}