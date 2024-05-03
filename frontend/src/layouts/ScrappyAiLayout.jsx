import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
import { Outlet } from "react-router-dom";

function ScrappyAiLayout() {
    document.documentElement.style.setProperty("--primary-50", "#efeeff");
    document.documentElement.style.setProperty("--primary-100", "#e1e0ff");
    document.documentElement.style.setProperty("--primary-200", "#c9c7fe");
    document.documentElement.style.setProperty("--primary-300", "#a8a5fc");
    document.documentElement.style.setProperty("--primary-400", "#8581f8");
    document.documentElement.style.setProperty("--primary-500", "#6863f1");
    document.documentElement.style.setProperty("--primary-600", "#4c46e5");
    document.documentElement.style.setProperty("--primary-700", "#3d38ca");
    document.documentElement.style.setProperty("--primary-800", "#3430a3");
    document.documentElement.style.setProperty("--primary-900", "#312e81");
    document.documentElement.style.setProperty("--primary-950", "#1d1b4b");
    return (
        <div className="h-fit min-h-screen bg-primary-300 pb-10 relative">
            <Navbar />
            <div id="mainBody" className="md:pt-32 pt-28 shadow-2xl transition-all rounded-b-3xl mb-[39rem] lg:mb-[34rem] scale-100 bg-primary-50 border-b-8 border-primary-900 pb-32 relative z-10">
                <Outlet />
            </div>
            <Footer />
            <ScrollToTopBtn />
        </div>
    );
}

export default ScrappyAiLayout;
