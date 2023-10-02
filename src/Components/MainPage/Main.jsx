import React from "react";
import "./MainStyle.scss";
import MainAbout from "./About/MainAbout";
export default function Main() {
    return(
        <>
        <main>
            <div className="bannerText">
                <h1>Визы в словению</h1>
                <h2>Тут будеь чтото написано on all lang. Крутой слоган что всем захочется с нами поговрить ОГО</h2>
            </div>
            <button type="button" className="bannerButton">СВЯЗАТЬСЯ С НАМИ</button>
        </main>
            <MainAbout />
        </>
    )
}