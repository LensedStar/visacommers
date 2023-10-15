import React from "react";


import { Route, Routes} from "react-router-dom";


import Header from "./Components/Header/Header";
import Main from "./Components/Pages/MainPage/Main";
import About from "./Components/Pages/About/About";
import Footer from "./Components/Footer/Footer";
import FormPage from "./Components/Pages/FormPage/FormPage";
import ScrollToTop from "./Components/ScrollToTop";
import FAQ from "./Components/Pages/FAQ/FAQ";

export default function App() {
    return(
        <div className="App">
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/visa" element={<About />} />
                <Route path="/aplication" element={<FormPage/>} />
                <Route path="/questions" element={<FAQ />} />
                <Route path="/pricement" element={<About />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}