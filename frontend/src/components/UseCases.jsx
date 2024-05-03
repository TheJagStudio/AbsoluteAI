import React from "react";

function UseCases({ usecase }) {
    return (
        <a className="flex flex-col group items-center justify-start bg-white border-2 border-customBlack shadow-custom hover:shadow-[3px_3px_0px_0px_#F97316] rounded-xl overflow-hidden group/card relative transition hover:-translate-y-1 hover:border-orange-400" href="#">
            <div className="w-full h-auto object-contain aspect-[2.26] overflow-hidden rounded-t-sm border border-white bg-gradient-to-tr from-orange-700/25  to-orange-200/10">
                <img alt={usecase.title} loading="lazy" decoding="async" data-nimg={1} className="object-cover w-full h-auto group-hover:scale-110 transition-all" style={{ color: "transparent" }} src={"https://www.kadoa.com/" + usecase.image} />
            </div>
            <div className="border-t border-stone-200 bg-white min-h-fit w-full p-8 px-3 md:px-8">
                <h3 className="mx-auto text-3xl font-medium mb-4">{usecase.title}</h3>
                <ul className="">
                    {usecase.desc.map((desc, index) => (
                        <li key={index}>&#x25C9; {desc}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-primary-800 py-2 px-3 rounded-lg text-sm text-white absolute right-4 top-4 translate-y-2 opacity-0 transition group-hover/card:translate-y-0 group-hover/card:opacity-100">Show me</div>
        </a>
    );
}

export default UseCases;
