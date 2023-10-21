import React from "react";


import { Route, Routes} from "react-router-dom";

import "./AppStyle.scss"

import Header from "./Components/Header/Header";
import Main from "./Components/Pages/MainPage/Main";
import About from "./Components/Pages/About/About";
import Footer from "./Components/Footer/Footer";
import FormPage from "./Components/Pages/FormPage/FormPage";
import ScrollToTop from "./Components/ScrollToTop";
import FAQ from "./Components/Pages/FAQ/FAQ";
import Business from "./Components/Pages/Visa/Business/Business";
import Middle from "./Components/Pages/Visa/Middle/Middle"
import High from "./Components/Pages/Visa/High/High";
import Additional from "./Components/Pages/Aditional/Additional";

export default function App() {
    return(
        <div className="App">
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/business" element={<Business />} />
                <Route path="/high_education" element={<High/>} />
                <Route path="/middle_education" element={<Middle/>} />
                <Route path="/additionalservises" element={<Additional />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contacts" element={<FormPage />} />
            </Routes>
            <Footer />
        </div>
    )
}