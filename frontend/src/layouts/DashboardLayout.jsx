import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import Dashboard from "../pages/Dashboard";

function DashboardLayout() {
    return (
        <div className="bg-gradient-to-br from-white to-gray-400 w-full h-screen py-4 flex">
            <div className="[background-image:radial-gradient(#bdbdbd_10%,_transparent_0),_radial-gradient(#bdbdbd_10%,_transparent_0)]  [background-position:_0_0,_5px_5px] [background-size:_10px_10px] bg-repeat absolute top-0 left-0 w-full h-full z-0"></div>
            <DashboardSidebar />
            <div className="w-[calc(100vw-21rem)] bg-white overflow-hidden rounded-xl border-2 border-customBlack ml-[20rem] h-[calc(100vh-2rem)] shadow-customBlack z-10">
                <DashboardNavbar />
                <Dashboard />
            </div>
        </div>
    );
}

export default DashboardLayout;
