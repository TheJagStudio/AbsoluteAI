import React, { useState, useEffect } from "react";
import QueryForm from "../components/QueryForm";

function DocAI() {
    const [isUseCaseDropdownOpen, setIsUseCaseDropdownOpen] = useState(false);
    const [currSelectedUseCase, setCurrSelectedUseCase] = useState("All use cases");
    const [docTypes, setDocTypes] = useState([]);
    const [paginationCount, setPaginationCount] = useState(12);
    const [isLoadMore, setIsLoadMore] = useState(true);
    const [docSearch, setDocSearch] = useState("");
    const [useCases, setUseCases] = useState([]);
    localStorage.setItem("count", 0);

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVER + "/api/documentAIData/")
            .then((res) => res.json())
            .then((data) => {
                setUseCases(data.usecases);
                setDocTypes(data.docTypes);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        let count = 0;
        docTypes.map((docType) => {
            if ((currSelectedUseCase === "All use cases" || docType?.usecases.includes(currSelectedUseCase)) && docType?.name.toLowerCase().includes(docSearch.toLowerCase())) {
                count = count + 1;
            }
        });
        if (count >= paginationCount && count !== 0) {
            setIsLoadMore(true);
        } else {
            setIsLoadMore(false);
        }
    }, [paginationCount, currSelectedUseCase, docSearch]);

    useEffect(() => {
        setPaginationCount(12);
    }, [currSelectedUseCase, docSearch]);
    return (
        <div className="relative md:px-10 lg:px-20">
            <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/63ad46eb382b947e986a79c1_Group%20477.svg" alt="side1" className="absolute top-5 right-0 h-72 z-0" />
            <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/63ad46eb382b947e986a79c1_Group%20477.svg" alt="side2" className="absolute top-32 left-0 h-72 z-0" />
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 w-full xl:w-[70%] lg:px-8 sm:px-20 px-8 mx-auto lg:gap-10 gap-6 lg:mt-10 z-1 relative">
                <div className="flex flex-col items-start lg:justify-start justify-center">
                    <h1 className="lg:text-5xl text-4xl font-semibold text-left lg:mt-20">Automate data extraction from any document</h1>
                    <p className="lg:text-xl text-lg text-left mt-3">
                        Automate data capture from any document with <span className="font-bold">Absolute.ai</span> AI-powered document OCR & machine learning.
                    </p>
                    <div className="flex gap-5 mt-5">
                        <button className="lg:text-base text-sm bg-blue-500 hover:bg-blue-600 border-2 border-customBlack shadow-[3px_3px_0px_0px_#1e40af] hover:shadow-[0px_0px_0px_0px_#1e40af] transition-all font-bold text-white rounded-lg w-fit p-2 px-4">Request a demo</button>
                        <button className="lg:text-base text-sm hover:bg-black/5 border-2 border-customBlack shadow-[3px_3px_0px_0px_#262626] hover:shadow-[0px_0px_0px_0px_#262626] transition-all font-bold rounded-lg w-fit p-2 px-4">Get Started</button>
                    </div>
                    <p className="text-sm mt-3">Free trial. Cancel anytime. No hidden charges.</p>
                </div>
                <img src="https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/641c0ed9b6404a0f28874436_hero-image-p-500.png" className="rounded-lg w-full h-full mix-blend-multiply object-contain" alt="AbsoluteAI" />
            </div>
            {/* We Support 300+ Docs Section */}
            <div className="lg:mt-20 mt-10 relative w-full max-w-[80%] mx-auto px-8 lg:px-32 py-5 bg-primary-200 rounded-lg border-2 border-customBlack shadow-custom ">
                <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/6399fc9bf26ed47b8d598bd0_Group%20459.svg" alt="side1" className="top-0 left-0 absolute h-full w-auto z-0" />
                <img src="https://assets-global.website-files.com/5fbb75c0795486e7856db4c8/6399fc8c42dfed7eaec8877e_Group%20460.svg" alt="side2" className="top-0 right-0 absolute h-full w-auto z-0" />
                <h2 className="text-4xl font-semibold text-center bg-primary-200 relative z-1 rounded-lg">We support 300+ document types</h2>
            </div>
            {/* All Documents Section */}
            <div className="mt-10 px-8 lg:px-32 py-5 flex flex-col items-center justify-center w-full">
                <div className="flex lg:flex-row flex-col-reverse items-center justify-center w-full gap-3 ">
                    {/* UseCase Dropdown */}
                    <div className="flex items-center justify-center gap-4 lg:w-1/3 w-full relative">
                        <div
                            id="useCaseButton"
                            className="inline-flex relative !outline-none w-full sm:px-4 px-3 py-2 pt-2.5 font-medium bg-white shadow-[3px_3px_0px_0px_#262626] text-gray-700 bg-transparent border-2 border-customBlack rounded-lg"
                            onClick={() => {
                                setIsUseCaseDropdownOpen(!isUseCaseDropdownOpen);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 text-gray-700 absolute right-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {currSelectedUseCase}
                        </div>
                        <div id="useCaseDropdownMenu" className={` ${isUseCaseDropdownOpen ? "" : "hidden"} no-scrollbar lg:w-[300px] min-w-[150px] w-full h-fit max-h-[240px] overflow-y-scroll overflow-x-hidden absolute top-10 drop-shadow-2xl left-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-1.5 py-2 space-y-1 z-40`}>
                            <p
                                className={currSelectedUseCase === "All use cases" ? "block cursor-pointer px-2.5 py-1 pt-1.5 w-full bg-gray-300 rounded" : "block cursor-pointer px-2 py-1 pt-1.5 w-full hover:bg-gray-200 rounded"}
                                onClick={() => {
                                    setIsUseCaseDropdownOpen(false);
                                    setCurrSelectedUseCase("All use cases");
                                }}
                            >
                                All use cases
                            </p>
                            {useCases.map((useCase, index) => {
                                if (currSelectedUseCase === useCase)
                                    return (
                                        <p
                                            key={index}
                                            className="block cursor-pointer px-2.5 py-1 pt-1.5 bg-gray-300 rounded w-full"
                                            onClick={() => {
                                                setIsUseCaseDropdownOpen(false);
                                                setCurrSelectedUseCase(useCase);
                                            }}
                                        >
                                            {useCase}
                                        </p>
                                    );
                                return (
                                    <p
                                        key={index}
                                        className="block cursor-pointer px-2.5 py-1 pt-1.5 w-full rounded hover:bg-gray-200"
                                        onClick={() => {
                                            setIsUseCaseDropdownOpen(false);
                                            setCurrSelectedUseCase(useCase);
                                        }}
                                    >
                                        {useCase}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    {/* Doc Type Searchbar */}
                    <div className="flex items-center justify-center gap-4 lg:w-2/3 w-full relative ">
                        <input
                            value={docSearch}
                            onChange={(event) => {
                                setDocSearch(event.target.value);
                            }}
                            type="text"
                            placeholder="Search by Document Type"
                            className="relative !outline-none w-full sm:px-4 sm:pr-10 px-3 pr-10 py-2 pt-2.5 font-medium text-gray-700 bg-transparent shadow-[3px_3px_0px_0px_#262626] bg-white border-2 border-customBlack rounded-lg  z-0"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-4 w-4 h-4 z-1" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 w-full mt-10">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
                        {docTypes.map((docType, index) => {
                            if ((currSelectedUseCase === "All use cases" || docType?.usecases.includes(currSelectedUseCase)) && docType?.name.toLowerCase().includes(docSearch.toLowerCase())) {
                                if (localStorage.getItem("count") < paginationCount) {
                                    localStorage.setItem("count", parseInt(localStorage.getItem("count")) + 1);
                                    return (
                                        <a target="_blank" href={"/doc-ai/" + docType?.url} key={index} className="flex flex-col gap-3">
                                            <img src={docType?.img} className="rounded-xl -hue-rotate-90 shadow-[3px_3px_0px_0px_#1e40af]"></img>
                                            <p className="text-sm">{docType?.name}</p>
                                        </a>
                                    );
                                }
                            }
                        })}
                    </div>

                    {isLoadMore ? (
                        <button
                            onClick={() => {
                                setPaginationCount((prevPageCount) => prevPageCount + 12);
                            }}
                            className="lg:text-base text-sm bg-blue-500 hover:bg-blue-600 border-2 border-customBlack shadow-[3px_3px_0px_0px_#1e40af] hover:shadow-[0px_0px_0px_0px_#1e40af] transition-all font-bold text-white rounded-lg w-fit p-2 px-4"
                        >
                            + Load More +
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            {/* More Questions Section */}
            <QueryForm />
        </div>
    );
}

export default DocAI;
