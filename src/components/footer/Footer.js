import React from "react";
import Link from "next/link";
function Footer(){

return <footer className=" absolute bg-primary_color w-screen h-auto flex flex-col justify-center items-center text-white space-y-8 pt-10 pb-1 ">
    <div className="w-5/6 h-auto">
        <div className="w-full h-auto flex flex-row justify-between ">
            <div className="flex flex-col w-3/4 h-auto">
                <h2 className="text-2xl pb-4">درباره زومیلا</h2>
                <p className="text-text_footer text-sm leading-6">
                    زومیلا سامانه جامع خرید و فروش املاک در ایران است. اگر در جستجوی خرید آپارتمان، فروش آپارتمان و
                    اجاره ویلا و ... هستید می توانید از طریق وب سایت زومیلا بروزترین آگهی های املاک را مشاهده کنید. آگهی
                    املاک زومیلا از طریق <a href="https://www.zoomila.com/%D9%85%D8%B4%D8%A7%D9%88%D8%B1%DB%8C%D9%86-%D8%A7%D9%85%D9%84%D8%A7%DA%A9" className="text-link_color">مشاورین املاک</a>  منتشر می شود.
                </p>
                <div className="flex flex-row justify-between">
                    <div>
                        <ul className="list-disc m-6">
                            <li>خرید ویلا در شمال</li>
                            <li>خرید ویلا در چمستان</li>
                            <li>خرید ویلا در نور مازندران</li>
                            <li>خرید ویلا در آمل</li>
                            <li>خرید ویلا در محمودآّباد</li>
                            <li>خرید ویلا در نوشهر</li>
                            <li>خرید ویلا در رویان</li>
                            <li>خرید ویلا در دماوند</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-disc m-6">
                            <li>خرید املاک در تهران</li>
                            <li>خرید املاک در همدان</li>
                            <li>خرید املاک در یزد</li>
                            <li>خرید املاک در کرج</li>
                            <li>خرید املاک در کیش</li>
                            <li>خرید املاک در شیراز</li>
                            <li>خرید املاک در مشهد</li>
                            <li>خرید املاک در اصفهان</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-disc m-6">
                            <li>خرید آپارتمان در تهران</li>
                            <li>خرید آپارتمان در پرند</li>
                            <li>خرید آپارتمان در همدان</li>
                            <li>خرید آپارتمان در کرج</li>
                            <li>خرید آپارتمان در نبریز</li>
                            <li>خرید آپارتمان در شیراز</li>
                            <li>خرید آپارتمان در مشهد</li>
                            <li>خرید آپارتمان در یزد</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-disc m-6">
                            <li>اجاره آپارتمان در تهران</li>
                            <li>اجاره آپارتمان در یزد</li>
                            <li>اجاره آپارتمان در کیش</li>
                            <li>اجاره آپارتمان در پرند</li>
                            <li>اجاره آپارتمان در اصفهان</li>
                            <li>اجاره آپارتمان در رشت</li>
                            <li>اجاره آپارتمان در کرج</li>
                            <li>اجاره آپارتمان در شیراز</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <hr/>
                </div>
                <div className="flex flex-row space-x-5 pt-4">

                    <a href="#" className="ml-5">مشاورین املاک</a>
                    <a href="#">ویلاها</a>
                    <a href="#">وبلاگ زومیلا</a>
                    <a href="#">سوالات متداول</a>
                    <a href="#">درباره ما</a>
                </div>
            </div>
            <div className="flex w-1/5 h-auto  flex flex-col justify-center leading-7 text-xs text-text_footer not-italic tracking-wider font-thin">
                <a href="#"><img src="/enamad.png" alt="نماد الکترونیک" className="h-32"/></a>
                <h2 className="my-4">تماس با زومیلا</h2>
                <address className="not-italic"> آدرس: تهران، میدان توحید، خیابان ستارخان،پلاک 91، واحد 4</address>
                <a href="#" className="">تلفن: 38250305 (081)</a>
                <address className="not-italic">دفتر مرکزی: همدان خیابان بوعلی، ساختمان ستاره شب، واحد 102</address>
                <a href="#" className="">تلفن: 38250305 (081)</a>
                <a href="#">پست الکترونیک: info@zoomila.com</a>
                <div className="flex flex-row flex-wrap justify-between mt-4">
                    <a href="https://www.instagram.com/zoomila.officials">
                        <img src="/svg/instagram.svg"  alt="اینستاگرام" className="w-6 h-6 	fill-white"/>
                    </a>
                    <a href="https://www.pinterest.com/zoomilaofficial/">
                        <img src="/svg/pinterest.svg" alt="پینترست" className="w-6 h-6"/>
                    </a>
                    <a href="https://www.linkedin.com/in/zoomila/">
                        <img src="/svg/linkedin.svg" alt="لینکداین" className="w-6 h-6"/>
                    </a>
                    <a href="https://twitter.com/zoomilaofficial">
                        <img src="/svg/twitter.svg" alt="توییتر" className="w-6 h-6"/>
                    </a>
                    <a href="https://www.facebook.com/zoomilaofficial">
                        <img src="/svg/facebook.svg" alt="فیسبوک" className="w-6 h-6"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC6O_EfbSd7d8yxM8WypEEdw">
                        <img src="/svg/youtube.svg" alt="یوتیوب" className="w-6 h-6"/>
                    </a>
                    <a href="https://www.aparat.com/zoomila/">
                        <img src="/svg/aparat.svg" alt="آپارات" className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="w-screen h-12 border-t-2 text-xs font-thin flex justify-center items-center">
        <p>
            استفاده از مطالب وب سایت زومیلا فقط برای مقاصد غیر تجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق
            به <span className="text-green_accent">زومیلا</span>  می باشد.
        </p>
    </div>
</footer>

}
export default Footer