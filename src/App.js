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
                <Route path="/study" element={<About />} />
                <Route path="/hight" element={<FormPage/>} />
                <Route path="/middle" element={<FAQ />} />
                <Route path="/aditional" element={<About />} />
                <Route path="/abbout" element={<About />} />
                <Route path="/contacts" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Footer />
        </div>
    )
}