import React from "react";
import Banner from "../Images/MainBanner.jpg"
import "./MainStyle.scss";
export default function Main() {
    return(
        <main>
            <div className="bannerText">
                <h1>Визы в словению</h1>
                <p>Поможем оформить визу в словению</p>
            </div>
            <button type="button" className="bannerButton">СВЯЗАТЬСЯ С НАМИ</button>
        </main>
    )
}