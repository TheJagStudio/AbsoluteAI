import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
import { Outlet } from "react-router-dom";

function HomeLayout() {
    document.documentElement.style.setProperty("--primary-50", "#f0fdf4");
    document.documentElement.style.setProperty("--primary-100", "#dcfce7");
    document.documentElement.style.setProperty("--primary-200", "#bbf7d0");
    document.documentElement.style.setProperty("--primary-300", "#86efac");
    document.documentElement.style.setProperty("--primary-400", "#4ade80");
    document.documentElement.style.setProperty("--primary-500", "#22c55e");
    document.documentElement.style.setProperty("--primary-600", "#16a34a");
    document.documentElement.style.setProperty("--primary-700", "#15803d");
    document.documentElement.style.setProperty("--primary-800", "#166534");
    document.documentElement.style.setProperty("--primary-900", "#14532d");
    document.documentElement.style.setProperty("--primary-950", "#052e16");
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

export default HomeLayout;
