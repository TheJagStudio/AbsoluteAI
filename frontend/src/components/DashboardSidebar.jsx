import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function DashboardSidebar() {
    const dashboardLinks = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                    <path fill="currentColor" d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path fill="currentColor" d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
            ),
        },
        {
            name: "Doc AI",
            path: "/dashboard/doc-ai",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                    <path fill="currentColor" fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: "Scrappy AI",
            path: "/dashboard/scrappy-ai",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                    <path fill="currentColor" fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: "Model Studio",
            path: "/dashboard/model-studio",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                    <path fill="currentColor" fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-white shadow-[3px_3px_0px_0px_#262626] translate-x-0 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-2rem)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border-2 border-customBlack py-4">
            <div className="relative">
                <a href="/" className="block antialiased font-sans text-base leading-relaxed text-inherit cursor-pointer py-1.5 font-medium">
                    <svg className="h-6 w-auto mx-auto" viewBox="0 0 417 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M181.62 29.3114C178.208 32.5562 173.46 33.8685 168.915 34.5246C164.859 35.1211 160.624 35.3716 156.997 36.9463C153.203 38.6045 150.817 41.3483 151.008 45.5953C151.128 48.1482 152.5 50.6415 154.432 52.5622C154.969 52.9916 155.518 53.3973 156.09 53.7671C156.055 53.6955 156.019 53.612 155.959 53.5404C153.657 50.3791 151.867 41.3245 163.916 39.3561C166.338 38.9624 168.76 38.5568 171.169 38.0081C173.293 37.5189 177.086 36.326 177.504 36.0993C177.85 35.8965 175.249 38.8193 167.28 41.1098C154.623 44.7483 158.512 55.2583 162.377 56.4632C163.857 56.8211 165.407 57 166.994 57C178.041 57 187 48.0528 187 37.006C187 33.0334 185.843 29.3352 183.851 26.2335C183.314 27.4026 182.562 28.4047 181.62 29.3114Z" fill="#E41E26" />
                        <path d="M147 37.006C147 39.201 147.358 41.2887 148.002 43.269C148.241 41.0978 148.98 39.0459 150.364 37.3042C152.869 34.119 156.758 32.6278 160.803 31.8285C164.835 31.0412 169.129 30.9457 173.269 29.9436C175.56 29.3949 177.886 28.5001 179.735 27.0328C181.274 25.7921 181.99 23.9072 180.391 22.1536C179.806 21.6287 179.186 21.1276 178.542 20.6743C179.711 23.0722 178.804 26.6391 169.32 27.5696C166.887 27.8202 164.465 28.0468 162.067 28.3809C161.363 28.4763 160.492 28.6075 159.598 28.7626C159.598 28.7626 160.385 27.7844 165.944 26.5198C177.373 23.943 175.237 18.9684 171.849 17.5965C170.299 17.2147 168.664 17 166.994 17C155.947 17.0119 147 25.9591 147 37.006Z" fill="#F8B228" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M409.864 0L403.5 6.36395L409.864 12.7279L416.228 6.36395L409.864 0ZM42.06 46.9674L45.7662 55.7414H58.7003L35.1769 2.79486H24.0582L0.53479 55.7414H13.4689L17.1751 46.9674H42.06ZM29.6554 17.5443L37.8999 37.0588H21.4108L29.6554 17.5443ZM105.52 35.9999C105.52 22.4607 95.1578 15.7289 86.1569 15.7289C80.1059 15.7289 76.5509 19.2083 76.0214 20.0403V2.26538H64.0706V16.4097V55.7414H76.0214V51.8082C76.5509 53.1697 80.1059 56.4977 86.1569 56.4977C95.1578 56.4977 105.52 50.0685 105.52 35.9999ZM93.9476 35.9999C93.9476 42.5048 89.5606 45.9841 84.4172 45.9841C79.5008 45.9841 75.4919 42.5804 75.4919 35.9999C75.4919 29.6463 79.5008 26.2426 84.4172 26.2426C89.5606 26.2426 93.9476 29.7219 93.9476 35.9999ZM126.321 25.1837C128.06 25.1837 129.649 26.0913 130.708 28.8143L140.767 26.1669C138.498 19.889 133.431 15.7289 125.791 15.7289C118.303 15.7289 111.496 20.0403 111.496 27.3772C111.496 32.9744 115.202 36.9832 123.068 39.8574L127.682 41.5215C129.573 42.2778 130.178 43.2611 130.178 44.0175C130.178 45.5303 128.514 47.1943 125.942 47.1943C122.161 47.1943 120.421 44.6982 119.438 42.5048L110.058 45.4547C111.723 52.3377 118.606 56.649 125.942 56.649C134.111 56.649 142.053 52.1108 142.053 44.1688C142.053 36.3298 136.42 34.2744 130.842 32.2393L130.783 32.218L125.791 30.4783C124.052 29.8732 123.144 29.0412 123.144 27.6041C123.144 26.0913 124.732 25.1837 126.321 25.1837ZM206.875 55.7414V2.26538H194.924V55.7414H206.875ZM214.136 38.9498C214.136 51.4301 221.624 56.3465 228.961 56.3465C236.374 56.3465 240.383 50.825 241.139 48.934V55.7414H253.09V16.4097H241.139V38.496C240.383 40.7651 237.281 45.9841 231.911 45.9841C228.129 45.9841 226.087 44.0931 226.087 38.1177V16.4097H214.136V38.9498ZM285.236 45.0008C283.572 45.4547 282.059 45.7572 279.941 45.7572C277.143 45.7572 276.689 43.6393 276.689 41.8997V26.2426H285.085V16.4097H276.689V7.18182H264.738V16.4097H259.216V26.2426H264.738V41.8997C264.738 54.0017 270.26 56.1952 276.84 56.1952C280.849 56.1952 283.572 55.6658 285.236 54.9094V45.0008ZM330.014 40.2356C332.51 22.4607 320.029 15.7289 311.104 15.7289C302.179 15.7289 290.379 22.4607 290.379 36.2268C290.379 49.766 302.027 56.4977 311.785 56.4977C319.727 56.4977 324.416 54.0017 327.896 50.598L321.315 44.2444C320.896 44.4189 320.506 44.5916 320.128 44.7589C318.048 45.6796 316.335 46.4379 312.239 46.4379C307.474 46.4379 303.918 44.3201 302.557 40.2356H330.014ZM302.708 31.8398C304.221 27.9066 307.7 25.9401 311.104 25.9401C314.508 25.9401 318.214 27.9066 319.424 31.8398H302.708ZM335.611 49.3878C335.611 53.0184 338.712 56.1196 342.343 56.1196C346.049 56.1196 349.15 53.0184 349.15 49.3878C349.15 45.6815 346.049 42.5804 342.343 42.5804C338.712 42.5804 335.611 45.6815 335.611 49.3878ZM395.894 16.4097H383.943V20.0403C383.414 19.2083 379.859 15.7289 373.808 15.7289C364.807 15.7289 354.445 22.4607 354.445 35.9999C354.445 50.0685 364.807 56.4977 373.808 56.4977C379.859 56.4977 383.414 53.1697 383.943 51.8082V55.7414H395.894V16.4097ZM384.473 35.9999C384.473 42.5804 380.464 45.9841 375.548 45.9841C370.404 45.9841 366.017 42.5048 366.017 35.9999C366.017 29.7219 370.404 26.2426 375.548 26.2426C380.464 26.2426 384.473 29.6463 384.473 35.9999ZM415.56 55.7414V16.4097H403.609V55.7414H415.56Z" fill="#262626" />
                    </svg>
                </a>
                <button className="align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </button>
            </div>
            <div className="m-4 flex flex-col justify-between h-[calc(100vh-7.5rem)]">
                <div className="mb-4 flex flex-col gap-1">
                    {/* className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" */}
                    {dashboardLinks.map((link, index) => {
                        let isActive = window.location.pathname === link.path;
                        return (
                            <NavLink key={index} to={link.path}>
                                <Button ripple={true} variant={isActive ? "gradient" : "text"} className="w-full flex items-center gap-4">
                                    {link.icon}
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">{link.name}</p>
                                </Button>
                            </NavLink>
                        );
                    })}
                </div>
                <NavLink to="/">
                    <Button ripple={true} variant={"gradient"} className="w-full flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                            <path fill="currentColor" fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                        </svg>
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Shubham Bhogayata</p>
                    </Button>
                </NavLink>
            </div>
        </div>
    );
}

export default DashboardSidebar;
