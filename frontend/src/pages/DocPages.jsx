import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DocPages() {
    const link = useParams().link;

    const [files, setFiles] = useState([]);
    const [pageData, setPageData] = useState({});
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVER + "/api/docPages/" + link)
            .then((res) => res.json())
            .then((response) => {
                setPageData(response);
                let temp = {};
                for (let index = 0; index < response.fields.length; index++) {
                    const element = response.fields[index];
                    temp[element] = "some value";
                }
                setData(temp);
                document.title = response.url.replace(/-/g, " ") + " | AbsoluteAI";
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div className="relative px-10 lg:px-20">
            <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/63ad46eb382b947e986a79c1_Group%20477.svg" alt="side1" className="absolute top-5 right-0 h-72 z-0" />
            <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/63ad46eb382b947e986a79c1_Group%20477.svg" alt="side2" className="absolute top-32 left-0 h-72 z-0" />
            <div className="grid grid-cols-2 w-full lg:w-[70%] mx-auto gap-10 lg:mt-10 z-1 relative">
                <div>
                    <h1 className="text-5xl font-semibold text-left lg:mt-20">{pageData?.title}</h1>
                    <p className="text-xl text-left mt-3">{pageData?.subtitle}</p>
                    <div className="flex gap-5 mt-5">
                        <button className="bg-blue-500 hover:bg-blue-600 border-2 border-customBlack shadow-[3px_3px_0px_0px_#1e40af] hover:shadow-[0px_0px_0px_0px_#1e40af] transition-all font-bold text-white rounded-lg w-fit p-2 px-4">Request a demo</button>
                        <button className="hover:bg-black/5 border-2 border-customBlack shadow-[3px_3px_0px_0px_#262626] hover:shadow-[0px_0px_0px_0px_#262626] transition-all font-bold rounded-lg w-fit p-2 px-4">Get Started</button>
                    </div>
                    <p className="text-sm mt-3">Free trial. Cancel anytime. No hidden charges.</p>
                </div>
                <img src={pageData?.img} className="rounded-lg w-full h-full mix-blend-multiply object-contain" alt="Invoice OCR" />
            </div>
            <div className="mt-20 relative w-fit mx-auto px-10 lg:px-32 py-5 bg-primary-200 rounded-lg border-2 border-customBlack shadow-custom ">
                <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/6399fc9bf26ed47b8d598bd0_Group%20459.svg" alt="side1" className="top-0 left-0 absolute h-full w-auto z-0" />
                <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/6399fc8c42dfed7eaec8877e_Group%20460.svg" alt="side2" className="top-0 right-0 absolute h-full w-auto z-0" />
                <h2 className="text-4xl font-semibold text-center bg-primary-200 relative z-1 rounded-lg">Try it out yourself</h2>
                <p className="text-xl text-customBlack/80 text-center mt-3 max-w-3xl mx-auto bg-primary-200 relative z-1 rounded-lg p-2">Take a moment to upload your own invoices and test AbsoluteAI's OCR capabilities. Get a firsthand look at how it works on your own documents.</p>
            </div>
            <div className="mt-10 relative w-full lg:w-[80%] min-h-72 grid gap-5 grid-cols-8 mx-auto p-7 bg-white rounded-xl border-2 border-customBlack shadow-[3px_3px_0px_0px_#262626]">
                <div className="col-span-3 p-3 flex flex-col gap-3 w-full h-auto aspect-[3/4] bg-gray-100 rounded-lg shadow-inner overflow-y-auto relative">
                    {files.length === 0 ? (
                        <img src="/static/images/sampleInvoice.png" className="rounded-lg object-contain h-full" />
                    ) : files[0] !== "loading" ? (
                        files.map((file, index) => <img key={index} src={import.meta.env.VITE_SERVER + file} className="rounded-lg" />)
                    ) : (
                        <>
                            <video src="/static/videos/imageLoading.mp4" className="w-full h-full mix-blend-multiply absolute bottom-0 right-0 object-fill opacity-60 animate-pulse" autoPlay={true} loop={true}></video>
                            <video src="/static/videos/imageLoading.mp4" className="w-full h-full mix-blend-multiply absolute top-0 left-0 rotate-180 object-fill opacity-60 animate-pulse" autoPlay={true} loop={true}></video>
                        </>
                    )}
                </div>
                <div className="col-span-5 h-full flex flex-col pl-5 border-dashed border-l-2 border-customBlack">
                    <div className="flex flex-nowrap justify-between items-center">
                        <p id="titleDoc" className="font-semibold text-2xl">
                            {link}.pdf
                        </p>
                        <button className="relative bg-gradient-to-bl from-blue-500 to-blue-800 flex flex-nowrap items-center justify-center gap-1 hover:scale-110 transition-all font-bold text-white rounded-full w-fit p-2 lg:px-4">
                            <input
                                onChange={() => {
                                    if (document.getElementById("inputFile").files.length === 0) return;
                                    const file = document.getElementById("inputFile").files[0];
                                    const fileName = file.name;
                                    document.getElementById("titleDoc").innerText = fileName;
                                    let formData = new FormData();
                                    formData.append("pdf", file);
                                    setFiles(["loading"]);
                                    fetch(import.meta.env.VITE_SERVER + "/api/dataExtract/" + link, {
                                        method: "POST",
                                        body: formData,
                                    })
                                        .then((res) => res.json())
                                        .then((response) => {
                                            setFiles(response["images"]);
                                            setData(response["data"]);
                                        })
                                        .catch((error) => console.error("Error:", error))
                                        .finally(() => {
                                            document.getElementById("inputFile").files = [];
                                        });
                                }}
                                type="file"
                                id="inputFile"
                                className="absolute top-0 left-0 h-full w-full opacity-0"
                                title="Please upload a file"
                                accept=".pdf"
                            />
                            <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="white" d="M12.71 11.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3V17a1 1 0 0 0 2 0v-2.59l.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.1a1.1 1.1 0 0 0-.31-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Z" />
                            </svg>
                            <span className="mt-1 whitespace-nowrap text-white hidden lg:block">{files.length === 0 ? "Upload File" : "Try Another File"}</span>
                        </button>
                    </div>
                    <div id="outputPreview" className="h-full mt-5">
                        <div className="flex flex-col gap-3">
                            {files?.[0] === "loading" ? (
                                <>
                                    <video src="/static/videos/loading.mp4" className="w-full h-full mix-blend-multiply object-fill animate-pulse" autoPlay={true} loop={true}></video>
                                </>
                            ) : (
                                <div className="grid grid-cols-1 relative overflow-y-auto max-h-[28rem]">
                                    <div className="sticky top-0 grid grid-cols-8 bg-gray-200 rounded-t-lg border border-customBlack">
                                        <p className="font-semibold text-lg col-span-3 border-r border-customBlack p-1 px-3">Field</p>
                                        <p className="font-semibold text-lg col-span-5 p-1 px-3">Value</p>
                                    </div>
                                    {Object.keys(data).map((key, index) => {
                                        let value = data[key].toString().replace(/\\n/g, "<br />");
                                        return (
                                            <div key={index} className="grid grid-cols-8 odd:bg-gray-200 even:bg-white last:rounded-b-lg border border-t-0 border-customBlack">
                                                <p className="font-semibold text-lg col-span-3 border-r border-customBlack p-1 px-3 truncate" title={key}>
                                                    {key}
                                                </p>
                                                <p className="text-customBlack/80 col-span-5 p-1 px-3 " dangerouslySetInnerHTML={{ __html: value }}></p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocPages;
