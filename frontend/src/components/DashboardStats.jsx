import React from "react";

function DashboardStats({ data }) {
    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border-2 border-customBlack">
            <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">{data.icon}</div>
            <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{data.title}</p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.value}</h4>
            </div>
            <div className="border-t-2 border-customBlack p-4">
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong className="text-green-500">+55%</strong>&nbsp;than last week
                </p>
            </div>
        </div>
    );
}

export default DashboardStats;
