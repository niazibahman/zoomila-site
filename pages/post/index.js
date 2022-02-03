import React from "react";
import Similarads from "../components/similarads/similarads";

function Post(){
    return <div>
        <main className="bg-zoomila_bg w-screen h-auto flex flex-col">
            <div className="w-screen h-auto flex flex-col items-center">
                <div className="w-5/6 h-12 bg-white flex flex-row justify-between items-center border border-black rounded-sm my-3 p-2">
                    <div className="flex flex-row items-center space-x-3 text-blue_accent">
                        <a href="#" className="ml-3"><h2>املاک تهران</h2></a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20"
                             fill="black">
                            <path fillrule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  cliprule="evenodd"/>
                        </svg>
                        <a href="#"><h2>خرید آپارتمان در تهران</h2></a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                             fill="black">
                            <path fillrule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  cliprule="evenodd"/>
                        </svg>
                        <a href="#"><h2>کوهک</h2></a>
                    </div>
                    <div className="flex flex-row items-center space-x-3">
                        <a href={"/"} className="ml-1">بازگشت</a>
                        <a href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillrule="evenodd"
                                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                                      cliprule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="w-5/6 h-auto flex flex-row justify-between">
                    <div className="w-72% h-auto flex flex-col justify-start">
                        <div className="bg-white text-sm text-city_explain py-2 px-4 flex flex-col   border border-black rounded-sm w-full h-auto">
                            <div className="flex flex-row items-center my-2">
                                <h1 className="font-iransansbold text-black text-lg ml-2">آپارتمان 145 متری در کوهک</h1>
                                <h3>تهران</h3>
                            </div>
                            <div className="flex flex-row mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                     fill="grey">
                                    <path fillRule="evenodd"
                                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                          clipRule="evenodd"/>
                                </svg>
                                <h4>
                                    منطقه 22 کوهک
                                </h4>
                            </div>
                            <hr/>
                            <div className="flex flex-row items-center my-4">
                                <p className="text-city_explain text-sm">قیمت</p>
                                <p className="text-black text-md font-bold mx-1">200,000,000</p>
                                <p className="text-black text-md font-bold">تومان</p>
                            </div>
                            <hr/>
                            {/*Todo:Slider*/}

                            <div className="flex flex-row justify-center">
                                <img src="/home1.jpeg" alt="آپارتمان" className="object-contain max-w-max h-64"/>
                            </div>
                            <hr/>
                            <div className="flex flex-row justify-between my-4">
                                <span className="bg-gray-200 rounded-sm p-2  border-r-4 border-red-500">آگهی جدید</span>
                                <button className="bg-button_color p-2 text-white text-sm rounded-sm">اشتراک گذاری</button>
                            </div>
                            <h2 className="bg-title_bg_details w-full py-1 pr-2 text-white text-md rounded-sm my-2">مشخصات اصلی آپارتمان</h2>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col w-49%">
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <p className="text-xs font-thin text-black">نوع ملک : </p><p className="text-xs font-thin text-city_explain">آپارتمان</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <p className="text-xs font-thin text-black">تعداد اتاق : </p><p className="text-xs font-thin text-city_explain">2</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <p className="text-xs font-thin text-black">متراژ : </p><p className="text-xs font-thin text-city_explain">145 متر</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <p className="text-xs font-thin text-black">زیر بنا : </p><p className="text-xs font-thin text-city_explain">---</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <p className="text-xs font-thin text-black">شرایط معامله : </p><p className="text-xs font-thin text-city_explain">فروش نقدی</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <p className="text-xs font-thin text-black">سال ساخت : </p><p className="text-xs font-thin text-city_explain">1400</p>
                                    </div>
                                </div>
                                <div className="flex flex-col w-49%">
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <p className="text-xs font-thin text-black">نوع سند : </p><p className="text-xs font-thin text-city_explain">قطعی</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <p className="text-xs font-thin text-black">امتیاز سازه : </p><p className="text-xs font-thin text-city_explain">---</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <p className="text-xs font-thin text-black">طبقه : </p><p className="text-xs font-thin text-city_explain">1</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <p className="text-xs font-thin text-black">تعداد طبقات : </p><p className="text-xs font-thin text-city_explain">6</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <p className="text-xs font-thin text-black">تعداد واحد در طبقه : </p><p className="text-xs font-thin text-city_explain">2</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <p className="text-xs font-thin text-black"></p><p></p>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-2"/>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col w-49%">
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20"
                                             fill="green">
                                            <path fillrule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  cliprule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-thin text-black">پارکینگ اختصاصی</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20"
                                             fill="green">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-thin text-black">کف پوش سرامیک</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20"
                                             fill="green">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-thin text-black">گرمایشی پکیج</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20"
                                             fill="green">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-thin text-black">آسانسور</p>
                                    </div>

                                </div>
                                <div className="flex flex-col w-49%">
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20"
                                             fill="green">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-thin text-black">انباری</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20"
                                             fill="green">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-thin text-black">تراس</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 bg-tag_gray my-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20"
                                             fill="green">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-thin text-black">تلفن</p>
                                    </div>
                                    <div className="flex flex-row items-center py-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20"
                                             fill="green">
                                            <path fillRule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-xs font-thin text-black">کولر</p>
                                    </div>

                                </div>
                            </div>
                            <h2 className="bg-title_bg_details w-full py-1 pr-2 text-white text-md rounded-sm my-2">توضیحات آپارتمان</h2>
                            <div className="text-xs font-thin text-city_explain space-y-8 my-8">
                                <p>آپارتمان 145 متری</p>
                                <p>نوساز</p>
                                <p>دارای آسانسور</p>
                                <p>کف پوش سرامیک</p>
                                <p>امکانات و نور عالی</p>
                            </div>
                            <p className="text-md text-black mb-2">آدرس ملک</p>
                            <div className="flex flex-row space-x-2">
                                <span className="text-xs ml-2">استان : </span>
                                <span className="text-xs font-bold text-city_explain">تهران</span>
                                <span className="text-xs ">شهر : </span>
                                <span className="text-xs font-bold text-city_explain">تهران</span>
                                <span className="text-xs ">محله : </span>
                                <span className="text-xs font-bold text-city_explain">کوهک</span>
                            </div>
                            {/*Todo map*/}
                            <img className="rounded-sm mt-4" src="/map.jpg" alt="map"/>
                        </div>
                    </div>
                    <div className="w-1/4 h-auto flex flex-col justify-start space-y-3">
                        <div className="bg-white text-sm text-city_explain py-2 px-4 flex flex-col items-center justify-center border border-black rounded-sm w-full h-auto space-y-2">
                            <img src="/agencyLogo.jpg" alt="لوگو آژانس"/>
                            <a href="#"><h2 className="text-black text-xl font-iransansbold">املاک پرچین</h2></a>
                            <h3>مشاور : جاوید</h3>
                            <hr className="w-full"/>
                            <div className="flex flex-row justify-center items-center">
                                <span>کد آگهی زومیلا:</span>
                                <span className="text-black border border-black bg-emergency rounded-md px-1 pt-2 pb-1 mr-2">601419</span>
                            </div>
                            <p>هنگام تماس کد آگهی زومیلا را قید نمایید</p>
                        </div>
                        <div className="bg-white p-2 flex flex-col items-center justify-center border border-black rounded-sm w-full h-auto">
                            <p className="my-6 font-bold">اطلاعات تماس</p>
                            <button className="bg-button_color py-3 w-4/6 my-2 rounded-sm text-white text-sm">مشاور : 0912****097</button>
                            <button className="bg-button_color py-3 w-4/6 my-2 rounded-sm text-white text-sm">آژانس : 0912****097</button>
                        </div>

                    </div>
                </div>
                {/*Todo similar advertise*/}
                <div className="w-5/6 h-auto bg-white flex flex-col border border-black rounded-sm my-3 px-3 pt-3 pb-6 space-y-3">
                    <span className="text-lg text-black">املاک مشابه</span>
                    <div className="flex flex-row justify-start">
                        <Similarads title="آپارتمان 60 متری در چیتگر" city="تهران" src="/home2.jpeg" piccount="2" price="4,000,00,000" />
                        <Similarads title="آپارتمان 50 متری در تجریش" city="تهران" src="/home4.jpeg" piccount="2" price="4,000,00,000"/>
                        <Similarads title="آپارتمان 100 متری در چیتگر" city="تهران" src="/noimage.jpg" piccount="0" price="3,000,00,000"/>
                        <Similarads title="آپارتمان 100 متری در چیتگر" city="تهران" src="/noimage.jpg" piccount="0" price="3,000,00,000"/>
                        <Similarads title="آپارتمان 100 متری در چیتگر" city="تهران" src="/noimage.jpg" piccount="0" price="3,000,00,000"/>
                    </div>
                </div>
                <hr className="mt-4 mb-8 w-5/6"/>
            </div>
        </main>
    </div>
}
export default Post