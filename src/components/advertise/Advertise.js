import React from "react";
import Link from "next/link";
function Advertise(props) {
    return <div className="border border-black rounded-sm w-full h-64 flex flex-row my-4">

        <div className="relative w-8/12 h-64 flex flex-col">
            <div className=" p-2 h-auto w-full flex flex-col space-y-4">
                <div className="flex flex-row justify-between">
                  <span className="flex flex-row items-center">
                      <h1 className="text-lg font-extrabold">{props.title}</h1>
                      <h3 className="text-sm text-text_footer mr-2">{props.city}</h3>
                  </span >
                    <span className="text-sm font-thin items-center">آگهی جدید</span>
                </div>
                <div className="flex flex-row justify-start space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="grey">
                        <path fillrule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              cliprule="evenodd"/>
                    </svg>
                    <h4>
                        {props.address}
                    </h4>
                    <span className="bg-tag_gray px-1 text-city_explain flex flex-row">
                        <p>{props.room} / </p>
                        <p> {props.floor}</p>
                    </span>
                </div>
                <div>
                    {props.description}
                </div>
                <div className="flex flex-row justify-between items-center my-1">
                    <div className="flex flex-row justify-start items-center text-black">
                        <img src="/agencyLogo.jpg" alt={props.estate}/>
                        <h2 className="mx-4">{props.estate}</h2>
                    </div>
                    <div className=" flex flex-row justify-between space-x-2">
                        <span className="bg-emergency p-2 mx-2 rounded-lg">فوری</span>
                        <button className="bg-button_color rounded-3xl text-white py-2 px-4 mx-2 w-24">تماس</button>
                        <button className="bg-button_color rounded-3xl text-white py-2 px-4 mx-2 w-24">پیامک</button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 border-b border-black w-full h-12 bg-ads_price p-2 flex flex-row justify-start items-center">
                <p>قیمت</p>
                <span>{props.price}</span>
                <p>تومان</p>
            </div>
        </div>
        <div className="relative w-4/12 h-64">
            <Link href=""><a><img src="/home.jpeg" alt="ملک" className=" object-cover w-80 h-64 border-b border-black"/></a></Link>
            <span className="absolute left-0 top-0 px-1 h-6 flex flex-row justify-center opacity-50 bg-gray-600 text-text_footer rounded-br-md">
                <p className="pt-1 text-sm">{props.piccount}</p>
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1 pr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"/>
                </svg>

            </span>
        </div>
    </div>
}

export default Advertise