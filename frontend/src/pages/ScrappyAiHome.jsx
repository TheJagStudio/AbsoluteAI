import React from "react";
import UseCases from "../components/UseCases";

function ScrappyAiHome() {
    const usecases = [
        {
            title: "Ecommerce",
            image: "/_next/image?url=%2Fimages%2Fuse-cases%2Fthumb-ecommerce.png&w=750&q=100",
            desc: ["Explore real-time pricing, promotions, and availability", "Collect product details, reviews, or product Q&A", "Match the data against your existing product catalog", "Get alerts to key data points like out of stock"],
        },
        {
            title: "Job Postings",
            image: "/_next/image?url=%2Fimages%2Fuse-cases%2Fthumb-jobs.png&w=750&q=100",
            desc: ["Collect job postings from any career page and job board", "Import jobs from career sites regardless of ATS", "Automatically transform that data into the structure you need", "Identify companies actively hiring for high-quality roles", "Track labor market trends in real-time"],
        },
        {
            title: "Generative AI",
            image: "/_next/image?url=%2Fimages%2Fuse-cases%2Fthumb-gen-ai.png&w=750&q=100",
            desc: ["Extract data from unstructured sources like HTML, PDF, or CSV", "Automatically clean, normalize, and prepare the data", "Customize the transformation rules to suit your LLM needs", "Keep your LLMs up-to-date with regular data updates"],
        },
        {
            title: "Finance",
            image: "/_next/image?url=%2Fimages%2Fuse-cases%2Fthumb-finance.png&w=750&q=100",
            desc: ["Automatically collect financial market data", "Extract key insights from financial reports and PDFs", "Enhance decision-making with real-time market data", "Ensure compliance with industry regulations"],
        },
        {
            title: "Lead Generation",
            image: "/_next/image?url=%2Fimages%2Fuse-cases%2Fthumb-companydata.png&w=750&q=100",
            desc: ["Automate lead generation from web sources", "Build lead lists from any source", "Update your CRM or existing lead lists", "Enrich your leads with company details", "Discover valuable team insights"],
        },
        {
            title: "Media Monitoring",
            image: "/_next/image?url=%2Fimages%2Fuse-cases%2Fthumb-media-monitoring.png&w=750&q=100",
            desc: ["Monitor brands, companies, or keywords in real-time across media channels", "Extract, classify, and summarize news from any source", "Set up custom reports or alerts"],
        },
    ];

    return (
        <div className="px-5 md:px-36">
            <div className="relative pb-32 flex items-center justify-end">
                <div className="mt-8 sm:my-24 grid place-items-right text-right mb-32 mr-0 z-10">
                    <h1 className="text-4xl sm:text-7xl font-bold text-indigo-900  p-5 px-10 pr-0 ">Extract Web Data</h1>
                    <h2 className="text-4xl font-bold text-orange-500">Easily with Scrappy AI</h2>
                </div>

                <img src="https://www.kadoa.com/images/before-after/a-man.svg" width="500" height="200" alt="." className="absolute bottom-0 right-0 z-0" animate-bounce></img>
                <div className="absolute bottom-0 left-0 z-0">
                    <div className="relative ml-auto block h-[400px] w-full max-w-full lg:w-[500px]">
                        <div className="absolute left-[10px] top-[230px]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-11.png" width={82} height={89} alt="." className="rotate-[15deg]" />
                        </div>
                        <div className="absolute left-[370px] top-[50px] animate-[tinybounce_6666ms_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-11.png" width={82} height={89} alt="." className="-rotate-[25deg]" />
                        </div>
                        <div className="absolute left-[26px] top-[70px] animate-[tinybounce_5555ms_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-11.png" width={82} height={89} alt="." className="rotate-[5deg]" />
                        </div>
                        <div className="absolute left-[252px] top-[2px] animate-[tinybounce_2424ms_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-8.png" width={70} height={60} alt="." className="rotate-[33deg]" />
                        </div>
                        <div className="absolute left-[2px] top-[130px] animate-[tinybounce_3s_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-8.png" width={70} height={60} alt="." className="-rotate-[3deg]" />
                        </div>
                        <div className="absolute left-[25px] top-[320px] animate-[tinybounce_3333ms_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-8.png" width={70} height={60} alt="." className="-rotate-[30deg]" />
                        </div>
                        <div className="absolute left-[345px] top-[120px] animate-[tinybounce_4444ms_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-7.png" width={125} height={148} alt="." className="rotate-[10deg]" />
                        </div>
                        <div className="absolute left-[205px] top-[70px] animate-[tinybounce_5s_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-6.png" width={125} height={148} alt="." className="-rotate-[14deg]" />
                        </div>
                        <div className="absolute left-[135px] top-[115px] animate-[tinybounce_1800ms_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-5.png" width={82} height={89} alt="." className="rotate-[60deg]" />
                        </div>
                        <div className="absolute left-[75px] top-[95px] animate-[tinybounce_2400ms_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-4.png" width={125} height={148} alt="." className="rotate-[10deg]" />
                        </div>
                        <div className="absolute left-[270px] top-[50px] animate-[tinybounce_2s_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-3.png" width={125} height={148} alt="." className="rotate-[25deg]" />
                        </div>
                        <div className="absolute left-[160px] top-[12px] animate-[tinybounce_5s_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-2.png" width={125} height={148} alt="." className="-rotate-[5deg]" />
                        </div>
                        <div className="absolute left-[60px] top-0 animate-[tinybounce_2s_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-1.png" width={125} height={148} alt="." className="-rotate-4" />
                        </div>
                        <div className="absolute left-[265px] top-[155px] animate-[tinybounce_4s_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-9.png" width={125} height={148} alt="." className="-rotate-[25deg]" />
                        </div>
                        <div className="absolute left-[50px] top-[200px] animate-[tinybounce_3s_infinite]">
                            <img src="https://www.kadoa.com/images/before-after/b-card-10.png" width={125} height={148} alt="." className="rotate-[5deg]" />
                        </div>
                        <img src="https://www.kadoa.com/images/before-after/b-man.svg" width={500} height={200} alt="." className="absolute bottom-0 left-0 " />
                    </div>
                </div>
            </div>

            <div className="flex items-stretch overflow-hidden rounded-xl border-2 border-customBlack bg-white shadow-custom bg-cover bg-right-top bg-no-repeat lg:h-screen">
                <div className="flex flex-col gap-3 p-4 font-dm text-xl font-medium sm:text-2xl lg:w-1/2 lg:p-12 lg:text-4xl">
                    <p className="leading-relaxed">
                        Absolute AI is the <span className="mx-1 bg-primary-200 !leading-none">easiest</span> and <span className="mx-1 bg-primary-200 !leading-none">fastest</span>way to get unstructured data into your applications, no&nbsp;matter the&nbsp;source.
                    </p>
                    <div className="lg:flex-1"> </div>
                    <div className="hidden text-sm lg:flex">Coming soon: workflow builder →</div>
                </div>
                <img src="/static/images/ScrapiFlow.png" alt="ScrapiFlow" className="hidden lg:block lg:w-1/2 lg:h-full  p-10" />
            </div>

            <div className="mx-auto grid w-full max-w-6xl gap-4 sm:gap-12 mt-10">
                <div className="relative w-full max-w-[80%] mt-16 mx-auto px-8 lg:px-32 py-5 bg-yellow-300 rounded-lg border-2 border-customBlack shadow-customBlack">
                    <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/6399fc9bf26ed47b8d598bd0_Group%20459.svg" alt="side1" className="top-0 left-0 absolute h-full w-auto z-0" />
                    <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/6399fc8c42dfed7eaec8877e_Group%20460.svg" alt="side2" className="top-0 right-0 absolute h-full w-auto z-0" />
                    <h2 className="text-4xl font-semibold text-center bg-yellow-300 relative z-1 rounded-lg">Popular use cases</h2>
                    <p className="text-xl text-customBlack/80 text-center mt-3 max-w-3xl mx-auto bg-yellow-300 relative z-1 rounded-lg p-2">Discover data processing automation for your role</p>
                </div>

                <div className="grid w-full gap-8 md:grid-cols-2">
                    {usecases.map((usecase, index) => (
                        <UseCases key={index} usecase={usecase} />
                    ))}
                </div>
            </div>

            <div className="w-full bg-white px-4 py-20 shadow-custom mt-20 rounded-xl border-2 border-customBlack relative flex">
                <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/64215f5168e5fa6f3868b353_grid-right.svg" alt="." className="absolute top-0 right-0 z-0" />
                <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/64215f5168e5fa6f3868b353_grid-right.svg" alt="." className="absolute bottom-0 left-0 z-0 rotate-180" />
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 w-full md:max-w-6xl gap-4 sm:flex md:gap-20 z-10">
                    <div className="flex flex-col gap-4 sm:gap-8 w-1/2">
                        <h2 className="text-3xl !leading-tight lg:text-5xl">
                            <span className="text-primary-800 font-bold">
                                Absolute AI is an <span className="rounded-[.125rem] bg-[#fdba724d] px-[.25rem] text-primary-800">API-first</span>
                                platform
                            </span>
                        </h2>
                        <ul className="ml-6 kList">
                            <li>Configure your workflows via API</li>
                            <li>Integrate the data into your products</li>
                            <li>Get change notifications through webhooks</li>
                        </ul>
                        <div className="flex-1" />
                        <button className="lg:text-base text-sm bg-blue-500 hover:bg-blue-600 border-2 border-customBlack shadow-[3px_3px_0px_0px_#1e40af] hover:shadow-[0px_0px_0px_0px_#1e40af] transition-all font-bold text-white rounded-lg w-fit p-2 px-4">Get API Access</button>
                    </div>
                    <div className="hidden md:block">
                        <div className="grid flex-1">
                            <pre className="mr-4 bg-orange-100/50 backdrop-blur-sm max-w-[28rem] border-2 border-orange-600 rounded-lg p-5 animate-[tinybounce_2s_infinite]">
                                <code>
                                    curl --request GET <br /> --get <span className="text-orange-700">"https://api.absoluteai.com/jobs/JOB_ID"</span>
                                    {"  "}
                                    <br /> --header <span className="break-all text-orange-700">"x-api-key: API_KEY"</span>
                                    {"  "}
                                    <br /> --header <span className="break-all text-orange-700">"Content-Type:application/json"</span>
                                </code>
                            </pre>
                            <pre className="ml-4 mt-4 bg-orange-100/50 backdrop-blur-sm max-w-[36rem] border-2 border-orange-600 rounded-lg p-5 animate-[tinybounce_4s_infinite] ">
                                <code>
                                    [<br />
                                    &nbsp;&nbsp;{"{"}
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;"model": <span className="text-orange-700 break-all">"Diverge Sport Carbon"</span>,
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;"link": <span className="text-orange-700 whitespace-pre-wrap ">"https://specialized.com/us/en/ diverge-sport-carbon/p/217055?color=350266-217055"</span>
                                    ,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;"price": <span className="text-orange-700">"$3,500"</span>
                                    <br />
                                    &nbsp;&nbsp;{"}"}
                                    <br />]
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrappyAiHome;
