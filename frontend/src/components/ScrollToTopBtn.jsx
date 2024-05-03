import React from "react";

function ScrollToTopBtn() {
    return (
        <button
            id="scrollToTopBtn"
            className={"fixed bottom-4 right-4 z-50 bg-yellow-300 p-3 shadow-customBlack rounded-full animate-bounce transition-all border-2 border-customBlack flex items-center justify-center"}
            onClick={() => {
                document.documentElement.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                document.body.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            <svg fill="#000000" width="20px" height="20px" viewBox="-0.025 0 0.475 0.475" xmlns="http://www.w3.org/2000/svg" className="pb-1 scale-125">
                <path stroke="#000000" strokeWidth={0.05} d="M0.383 0.383a0.026 0.026 0 0 1 -0.018 -0.008L0.213 0.224l-0.152 0.152a0.026 0.026 0 0 1 -0.036 -0.036l0.17 -0.17a0.026 0.026 0 0 1 0.036 0l0.17 0.17a0.026 0.026 0 0 1 -0.018 0.044z" />
            </svg>
        </button>
    );
}

export default ScrollToTopBtn;
