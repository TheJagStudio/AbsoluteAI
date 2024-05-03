import React, { useEffect } from "react";
import { useLottie } from "lottie-react";
import errorAnimation from "../lotties/404.json";

function ErrorPage() {
    const options = {
        animationData: errorAnimation,
        loop: true,
    };

    useEffect(() => {
        document.title = "404 - Page Not Found";
        setTimeout(() => {
            window.location.href = "/";
        }, 5000);
    }, []);

    const { View } = useLottie(options);
    return <div className="max-w-lg mx-auto h-screen flex items-center justify-center">{View}</div>;
}

export default ErrorPage;
