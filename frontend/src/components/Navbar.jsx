import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function Navbar() {
    const [activeTab, setactiveTab] = useState("");
    const [swiper, setSwiper] = useState(null);

    const navItems = [
        {
            name: "Doc AI",
            link: "/doc-ai",
            submenu: [
                {
                    title: "ACCOUNTING",
                    items: [
                        {
                            name: "INVOICE OCR",
                            link: "/doc-ai/invoice-ocr",
                        },
                        {
                            name: "RECEIPT OCR",
                            link: "/doc-ai/receipt-ocr",
                        },
                        {
                            name: "EXPENSE MANAGEMENT",
                            link: "/doc-ai/expense-management",
                        },
                    ],
                },
                {
                    title: "ID CARD VERIFICATION",
                    items: [
                        {
                            name: "DRIVER'S LICENSE",
                            link: "/doc-ai/drivers-license",
                        },
                        {
                            name: "PASSPORT",
                            link: "/doc-ai/passport",
                        },
                        {
                            name: "VOTER ID",
                            link: "/doc-ai/voter-id",
                        },
                        {
                            name: "PAN CARD",
                            link: "/doc-ai/pan-card",
                        },
                        {
                            name: "AADHAR CARD",
                            link: "/doc-ai/aadhar-card",
                        },
                    ],
                },
                {
                    title: "AUTOMATION",
                    items: [
                        {
                            name: "FORM FILLING",
                            link: "/doc-ai/form-filling",
                        },
                        {
                            name: "DATA EXTRACTION",
                            link: "/doc-ai/data-extraction",
                        },
                        {
                            name: "DATA ENTRY",
                            link: "/doc-ai/data-entry",
                        },
                        {
                            name: "DATA VALIDATION",
                            link: "/doc-ai/data-validation",
                        },
                        {
                            name: "DATA CLASSIFICATION",
                            link: "/doc-ai/data-classification",
                        },
                    ],
                },
            ],
        },
        {
            name: "Model Studio",
            link: "/model-studio",
            submenu: [
                {
                    title: "USE CASES",
                    items: [
                        {
                            name: "REVENUE PREDICTION",
                            link: "/doc-ai/invoice-ocr",
                        },
                        {
                            name: "SALES FORECASTING",
                            link: "/doc-ai/receipt-ocr",
                        },
                        {
                            name: "ENERGY CONSUMPTION",
                            link: "/doc-ai/expense-management",
                        },
                        {
                            name: "PREDICTING WEATHER",
                            link: "/doc-ai/expense-management",
                        },
                    ],
                },
                {
                    title: "RESOURCES",
                    items: [
                        {
                            name: "BLOG",
                            link: "/doc-ai/drivers-license",
                        },
                        {
                            name: "KNOWLEDGE BASE",
                            link: "/doc-ai/passport",
                        },
                        {
                            name: "API DOCS",
                            link: "/doc-ai/voter-id",
                        },
                        {
                            name: "SECURITY",
                            link: "/doc-ai/pan-card",
                        },
                    ],
                },
                {
                    title: "SERVICES",
                    items: [
                        {
                            name: "DATA PREP AND MERGING",
                            link: "/doc-ai/form-filling",
                        },
                        {
                            name: "DATA VISUALIZATION",
                            link: "/doc-ai/data-extraction",
                        },
                        {
                            name: "FEATURE ENGINEERING",
                            link: "/doc-ai/data-entry",
                        },
                    ],
                },
            ],
        },
        {
            name: "Scrappy AI",
            link: "/scrappy-ai",
        },
        {
            name: "Pricing",
            link: "/pricing",
        },
        {
            name: "Log In",
            link: "/log-in",
        },
        {
            name: "Sign Up",
            link: "/sign-up",
        },
    ];

    return (
        <>
            <nav className="fixed block w-[80%] left-[10%] bg-primary-200 border-2 shadow-custom border-customBlack rounded-full backdrop-saturate-200  top-5 z-50 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-black">
                    <a href="/" className="block antialiased font-sans text-base leading-relaxed text-inherit mr-4 cursor-pointer py-1.5 font-medium">
                        <svg className="h-6 w-auto" viewBox="0 0 417 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M181.62 29.3114C178.208 32.5562 173.46 33.8685 168.915 34.5246C164.859 35.1211 160.624 35.3716 156.997 36.9463C153.203 38.6045 150.817 41.3483 151.008 45.5953C151.128 48.1482 152.5 50.6415 154.432 52.5622C154.969 52.9916 155.518 53.3973 156.09 53.7671C156.055 53.6955 156.019 53.612 155.959 53.5404C153.657 50.3791 151.867 41.3245 163.916 39.3561C166.338 38.9624 168.76 38.5568 171.169 38.0081C173.293 37.5189 177.086 36.326 177.504 36.0993C177.85 35.8965 175.249 38.8193 167.28 41.1098C154.623 44.7483 158.512 55.2583 162.377 56.4632C163.857 56.8211 165.407 57 166.994 57C178.041 57 187 48.0528 187 37.006C187 33.0334 185.843 29.3352 183.851 26.2335C183.314 27.4026 182.562 28.4047 181.62 29.3114Z" fill="#E41E26" />
                            <path d="M147 37.006C147 39.201 147.358 41.2887 148.002 43.269C148.241 41.0978 148.98 39.0459 150.364 37.3042C152.869 34.119 156.758 32.6278 160.803 31.8285C164.835 31.0412 169.129 30.9457 173.269 29.9436C175.56 29.3949 177.886 28.5001 179.735 27.0328C181.274 25.7921 181.99 23.9072 180.391 22.1536C179.806 21.6287 179.186 21.1276 178.542 20.6743C179.711 23.0722 178.804 26.6391 169.32 27.5696C166.887 27.8202 164.465 28.0468 162.067 28.3809C161.363 28.4763 160.492 28.6075 159.598 28.7626C159.598 28.7626 160.385 27.7844 165.944 26.5198C177.373 23.943 175.237 18.9684 171.849 17.5965C170.299 17.2147 168.664 17 166.994 17C155.947 17.0119 147 25.9591 147 37.006Z" fill="#F8B228" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M409.864 0L403.5 6.36395L409.864 12.7279L416.228 6.36395L409.864 0ZM42.06 46.9674L45.7662 55.7414H58.7003L35.1769 2.79486H24.0582L0.53479 55.7414H13.4689L17.1751 46.9674H42.06ZM29.6554 17.5443L37.8999 37.0588H21.4108L29.6554 17.5443ZM105.52 35.9999C105.52 22.4607 95.1578 15.7289 86.1569 15.7289C80.1059 15.7289 76.5509 19.2083 76.0214 20.0403V2.26538H64.0706V16.4097V55.7414H76.0214V51.8082C76.5509 53.1697 80.1059 56.4977 86.1569 56.4977C95.1578 56.4977 105.52 50.0685 105.52 35.9999ZM93.9476 35.9999C93.9476 42.5048 89.5606 45.9841 84.4172 45.9841C79.5008 45.9841 75.4919 42.5804 75.4919 35.9999C75.4919 29.6463 79.5008 26.2426 84.4172 26.2426C89.5606 26.2426 93.9476 29.7219 93.9476 35.9999ZM126.321 25.1837C128.06 25.1837 129.649 26.0913 130.708 28.8143L140.767 26.1669C138.498 19.889 133.431 15.7289 125.791 15.7289C118.303 15.7289 111.496 20.0403 111.496 27.3772C111.496 32.9744 115.202 36.9832 123.068 39.8574L127.682 41.5215C129.573 42.2778 130.178 43.2611 130.178 44.0175C130.178 45.5303 128.514 47.1943 125.942 47.1943C122.161 47.1943 120.421 44.6982 119.438 42.5048L110.058 45.4547C111.723 52.3377 118.606 56.649 125.942 56.649C134.111 56.649 142.053 52.1108 142.053 44.1688C142.053 36.3298 136.42 34.2744 130.842 32.2393L130.783 32.218L125.791 30.4783C124.052 29.8732 123.144 29.0412 123.144 27.6041C123.144 26.0913 124.732 25.1837 126.321 25.1837ZM206.875 55.7414V2.26538H194.924V55.7414H206.875ZM214.136 38.9498C214.136 51.4301 221.624 56.3465 228.961 56.3465C236.374 56.3465 240.383 50.825 241.139 48.934V55.7414H253.09V16.4097H241.139V38.496C240.383 40.7651 237.281 45.9841 231.911 45.9841C228.129 45.9841 226.087 44.0931 226.087 38.1177V16.4097H214.136V38.9498ZM285.236 45.0008C283.572 45.4547 282.059 45.7572 279.941 45.7572C277.143 45.7572 276.689 43.6393 276.689 41.8997V26.2426H285.085V16.4097H276.689V7.18182H264.738V16.4097H259.216V26.2426H264.738V41.8997C264.738 54.0017 270.26 56.1952 276.84 56.1952C280.849 56.1952 283.572 55.6658 285.236 54.9094V45.0008ZM330.014 40.2356C332.51 22.4607 320.029 15.7289 311.104 15.7289C302.179 15.7289 290.379 22.4607 290.379 36.2268C290.379 49.766 302.027 56.4977 311.785 56.4977C319.727 56.4977 324.416 54.0017 327.896 50.598L321.315 44.2444C320.896 44.4189 320.506 44.5916 320.128 44.7589C318.048 45.6796 316.335 46.4379 312.239 46.4379C307.474 46.4379 303.918 44.3201 302.557 40.2356H330.014ZM302.708 31.8398C304.221 27.9066 307.7 25.9401 311.104 25.9401C314.508 25.9401 318.214 27.9066 319.424 31.8398H302.708ZM335.611 49.3878C335.611 53.0184 338.712 56.1196 342.343 56.1196C346.049 56.1196 349.15 53.0184 349.15 49.3878C349.15 45.6815 346.049 42.5804 342.343 42.5804C338.712 42.5804 335.611 45.6815 335.611 49.3878ZM395.894 16.4097H383.943V20.0403C383.414 19.2083 379.859 15.7289 373.808 15.7289C364.807 15.7289 354.445 22.4607 354.445 35.9999C354.445 50.0685 364.807 56.4977 373.808 56.4977C379.859 56.4977 383.414 53.1697 383.943 51.8082V55.7414H395.894V16.4097ZM384.473 35.9999C384.473 42.5804 380.464 45.9841 375.548 45.9841C370.404 45.9841 366.017 42.5048 366.017 35.9999C366.017 29.7219 370.404 26.2426 375.548 26.2426C380.464 26.2426 384.473 29.6463 384.473 35.9999ZM415.56 55.7414V16.4097H403.609V55.7414H415.56Z" fill="#262626" />
                        </svg>
                    </a>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">
                            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                {navItems.map((item, index) => (
                                    <NavLink onMouseEnter={() => swiper.slideNext()} to={item.link} key={index} className={({ isActive }) => (isActive ? "align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-4 rounded-full bg-gradient-to-tr from-primary-900 to-primary-700 text-white shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/20 active:opacity-[0.85] hidden lg:inline-block" : "block antialiased font-semibold p-1")}>
                                        {item.name}
                                    </NavLink>
                                ))}
                            </ul>
                        </div>
                        <button
                            onClick={() => {
                                document.getElementById("mobileNavbar").classList.toggle("scale-y-100");
                                document.getElementById("mobileNavbar").classList.toggle("opacity-100");
                                document.getElementById("mobileNavbar").classList.toggle("scale-y-0");
                                document.getElementById("mobileNavbar").classList.toggle("opacity-0");
                            }}
                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[40px] max-h-[40px] rounded-full text-xs ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            type="button"
                        >
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div id="mobileNavbar" className="scale-y-0 opacity-0 origin-top transition-all duration-300 block lg:hidden w-full overflow-hidden absolute top-[120%] left-0 bg-primary-200 shadow-custom border-2 border-customBlack rounded-3xl p-5 backdrop-saturate-200">
                    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
                        {navItems.map((item, index) => (
                            <NavLink to={item.link} key={index} className={({ isActive }) => (isActive ? "w-full align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-4 rounded-full bg-gradient-to-tr from-primary-900 to-primary-700 text-white shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/20 active:opacity-[0.85] inline-block" : "block antialiased font-semibold p-1")}>
                                {item.name}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className="hidden fixed w-fit max-w-5xl left-1/2 -translate-x-1/2 bg-primary-200 shadow-custom border-2 border-customBlack rounded-3xl backdrop-saturate-200  top-28 z-50 h-max px-4 py-2 lg:px-8 lg:p-4">
                <Swiper className="mySwiper" onSwiper={(swiper) => setSwiper(swiper)} loop={true}>
                    {navItems.map((navitem, index) => {
                        if (navitem?.submenu) {
                            return (
                                <SwiperSlide key={index} className="py-2 ">
                                    <div className="flex flex-nowrap gap-5 w-fit mx-auto">
                                        {navitem?.submenu?.map((item, index2) => (
                                            <div key={index2} className="flex flex-col gap-2">
                                                <p className="font-semibold text-lg ">{item?.title}</p>
                                                <div className="flex flex-col gap-3">
                                                    {item?.items.map((subItem, subIndex) => (
                                                        <NavLink to={subItem?.link}>
                                                            <div key={subIndex} className="cursor-pointer group border-2 border-transparent hover:border-primary-900 hover:bg-gradient-to-tr hover:from-primary-800 hover:to-primary-600 flex items-center justify-between group w-64 bg-primary-300/50 transition-all p-2 px-4 rounded-lg">
                                                                <p className="mt-1 whitespace-nowrap text-sm group-hover:text-white">{subItem?.name}</p>
                                                                <svg className="w-5 h-5" viewBox="0 0 16 16">
                                                                    <path fill="currentColor" className="group-hover:text-white" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                                                </svg>
                                                            </div>
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            );
                        }
                    })}
                </Swiper>
            </div>
        </>
    );
}

export default Navbar;
