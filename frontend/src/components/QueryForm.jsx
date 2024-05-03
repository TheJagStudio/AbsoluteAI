import React from "react";

function QueryForm() {
    return (
        <div className="mt-10 px-8 lg:px-32 flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full max-w-5xl bg-white border-2 border-customBlack shadow-[3px_3px_0px_0px_#000] py-8 rounded-lg">
                <p className="uppercase text-gray-500 text-center px-4">Get in touch</p>
                <h2 className="text-3xl font-bold mt-1 text-center px-4">Have More Questions ?</h2>
                <div className="mt-6 lg:px-8 px-6 flex lg:flex-row flex-col items-start justify-center w-full h-full relative">
                    {/* Query Form Div */}
                    <div className="lg:w-[65%] w-full lg:pr-8 pr-0 lg:border-r-2 lg:border-b-0 lg:pb-0 pb-8 border-b-2 border-dashed border-customBlack flex flex-col items-start justify-start">
                        <p className="text-xl font-bold mb-2">Send in a query</p>
                        <form className="w-full">
                            <div className="w-full mb-4">
                                <label htmlFor="queryUserName" className="font-medium">
                                    Name
                                </label>
                                <input type="text" name="" id="queryUserName" className="w-full h-12 bg-transparent border border-customBlack shadow-inner bg-gray-200 rounded-lg px-3 py-2 mt-1 !outline-none" placeholder="Enter your name" />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="queryUserEmail" className="font-medium">
                                    Email
                                </label>
                                <input type="email" name="" id="queryUserEmail" className="w-full h-12 bg-transparent border border-customBlack shadow-inner bg-gray-200 rounded-lg px-3 py-2 mt-1 !outline-none" placeholder="Enter your email" />
                            </div>
                            <div className="w-full mb-2">
                                <label htmlFor="queryUserMessage" className="font-medium">
                                    Message
                                </label>
                                <textarea rows="" cols="" id="queryUserMessage" className="w-full h-full bg-transparent border border-customBlack shadow-inner bg-gray-200 rounded-lg px-3 py-2 mt-1 !outline-none" placeholder="How can we help you ?"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 border-2 border-customBlack shadow-[3px_3px_0px_0px_#1e40af] hover:shadow-[0px_0px_0px_0px_#1e40af] transition-all font-bold text-white rounded-lg w-fit p-2 px-4">
                                Send
                            </button>
                        </form>
                    </div>
                    {/* Talk to AI expert Div */}
                    <div className="lg:w-[35%] w-full h-full lg:px-8 lg:mt-0 mt-6 relative flex flex-col">
                        <embed src="https://lottie.host/embed/870d7912-91ec-43b1-84da-ca7702730692/WDwPnr9pcz.json" className="w-full h-auto hidden lg:block "></embed>
                        <h2 className="text-xl font-bold mb-2 lg:text-center">Talk to an AI expert</h2>
                        <p className="text-sm mb-5 lg:text-center">Get a free 15-minute consultation with our Automation experts. We can discuss Pricing, Integrations or try the app live on your own documents.</p>
                        <button className="bg-blue-500 lg:mx-auto border-2 border-customBlack shadow-[3px_3px_0px_0px_#1e40af] hover:shadow-[0px_0px_0px_0px_#1e40af] transition-all font-bold text-white rounded-lg w-fit p-2 px-4">Request a demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QueryForm;
