import React from "react";

import { Route, Routes} from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/MainPage/Main";
import Something from "./Components/Something";
import About from "./Components/About";

export default function App() {
    return(
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/something" element={<Something/>} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}