import React from "react";

function Features() {
    return (
        <div className="mt-5 px-10">
            <h2 className="text-4xl font-semibold text-center">Product features</h2>
            <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 shadow-sm mx-auto rounded-xl bg-white p-10">
                <div className="flex flex-col gap-10">
                    <p className="bg-yellow-300 rounded-lg w-fit p-2 px-4">Model Building</p>
                    <div>
                        <p className="text-4xl font-medium">Ground breaking AI models built in minutes, not months.</p>
                        <p className="text-md font-normal mt-5">Absolute AI is fundamentally designed to give you insanely short time to value so you can turn your data into ROI by building AI models with just a few clicks.</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 transition-all font-bold text-white rounded-lg w-fit p-2 px-4">Try for Free</button>
                </div>
                <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/62c60885722f96d5f91b1dfb_ai-models.svg" alt="AI model building" className="rounded-lg w-full h-full" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-[70%] mx-auto gap-7">
                <div className="w-full grid grid-cols-1 gap-5 mt-10 shadow-sm mx-auto rounded-xl bg-white p-10">
                    <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/62c60a811ca9338186efc539_launch-model.svg" alt="AI model Deployment" className="rounded-lg w-full h-full" />
                    <div className="flex flex-col gap-10">
                        <p className="bg-primary-500 rounded-lg w-fit p-2 px-4 text-white">Model Deployment</p>
                        <div>
                            <p className="text-3xl font-medium">Get your AI models to production in just one click.</p>
                            <p className="text-md font-normal mt-5">Forget spending months on DevOps to get a model in production. Instant web apps allow you to share a dynamic link to use the model in real time.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 gap-5 mt-10 shadow-sm mx-auto rounded-xl bg-white p-10">
                    <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/62c60a811ca9330456efc53a_process-automation.svg" alt="AI model Monitoring" className="rounded-lg w-full h-full" />
                    <div className="flex flex-col gap-10">
                        <p className="bg-blue-500 rounded-lg w-fit p-2 px-4 text-white">Model Monitoring</p>
                        <div>
                            <p className="text-3xl font-medium">Robotic Process Automation, now powered by AI.</p>
                            <p className="text-md font-normal mt-5">Automatic model monitoring combined with if-this-than-that automations with Zapier. E.g. If prediction probability is 80%, automatically take this action.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-[70%] mx-auto gap-7">
                <div className="w-full grid grid-cols-1 gap-5 mt-10 shadow-sm mx-auto rounded-xl bg-white p-10">
                    <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/62c60a811ca933592cefc53b_api-real-time.svg" alt="AI Integration & Sharing" className="rounded-lg w-full h-full" />
                    <div className="flex flex-col gap-10">
                        <p className="bg-yellow-300 rounded-lg w-fit p-2 px-4">Integration & Sharing</p>
                        <div>
                            <p className="text-3xl font-medium">Real-time REST APIs that power your product.</p>
                            <p className="text-md font-normal mt-5">Make predictions on the fly by integrating AI into your apps OR visualize prediction data into your existing tooling like PowerBI, Looker, etc.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 gap-5 mt-10 shadow-sm mx-auto rounded-xl bg-white p-10">
                    <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/62c60a47a06e291bd4c6ff62_process-automation.svg" alt="AI Expert Support" className="rounded-lg w-full h-full" />
                    <div className="flex flex-col gap-10">
                        <p className="bg-purple-500 rounded-lg w-fit p-2 px-4 text-white">Expert Support</p>
                        <div>
                            <p className="text-3xl font-medium">Not just software, an entire data science team.</p>
                            <p className="text-md font-normal mt-5">Get 24x7 access to a dedicated data scientist who becomes an extension of your team helping with data merging, enrichment, cleaning and other statistical work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
