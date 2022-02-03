import React from "react";
function Similarads(props){
    return <div className="rounded-sm flex flex-col ml-2 pb-2 bg-white w-1/5 h-80 shadow-lg">
        <div className="relative w-full h-52">
            <img src={props.src.toString()} alt={props.title}   className="object-none object-center  h-52 w-full rounded-t-sm"/>
            <div className="absolute top-0 left-0 opacity-60 bg-title_bg_details flex flex-row items-center rounded-tl-sm ">
                <p className=" text-sm text-white pr-1">{props.piccount}</p>
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pr-1 pl-1" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd"
                          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"/>
                </svg>
            </div>
            <div className={`${props.piccount==0?"hidden":"absolute top-0 right-0 bg-emergency text-black rounded-tr-sm text-sm px-1"}`}>فوری</div>
        </div>
        <div className="flex flex-col justify-around h-28 px-1">
            <div className="flex flex-row items-center mb-4">
                <h2 className="font-bold">{props.title}</h2>
                <p className="text-xs text-city_explain mr-2">{props.city}</p>
            </div>
            <hr/>
            <div className="flex flex-row justify-between text-md font-light">
                <span>قیمت</span>
                <span>{props.price} تومان</span>
            </div>
        </div>
    </div>
}
export default Similarads