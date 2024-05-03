import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocPages from "./pages/DocPages";
import DocAI from "./pages/DocAI";

import { useEffect } from "react";
import ErrorPage from "./pages/ErrorPage";
import HomeLayout from "./layouts/HomeLayout";
import ScrappyAiLayout from "./layouts/ScrappyAiLayout";
import ScrappyAiHome from "./pages/ScrappyAiHome";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";

function App() {
    useEffect(() => {
        window.onscroll = function () {
            let scale = document.getElementById("mainBody").style.scale;
            if (!scale) {
                scale = 1;
            }
            if (window.innerHeight + window.scrollY + 300 >= document.body.offsetHeight) {
                // check if user has reached the bottom of the page
                if (scale >= 0.9) {
                    scale = Math.min(parseFloat(scale) - 0.002, 0.9);
                }
            } else {
                if (scale < 1) {
                    scale = Math.max((parseFloat(scale) + 0.002).toString(), 1);
                } else {
                    scale = 1;
                }
            }
            document.getElementById("mainBody").style.transform = "scale(" + scale + ",1)";
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("scrollToTopBtn").style.scale = "1";
            } else {
                document.getElementById("scrollToTopBtn").style.scale = "0";
            }
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/doc-ai" element={<DocAI />} />
                    <Route path="/doc-ai/:link" element={<DocPages />} />
                </Route>
                <Route element={<ScrappyAiLayout />}>
                    <Route path="/scrappy-ai" element={<ScrappyAiHome />} />
                </Route>
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
