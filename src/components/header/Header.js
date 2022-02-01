import React, {useState} from "react";
import Link from "next/link";

function Header() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return <header className=" container mx-auto   flex  justify-center">

        <nav className='relative flex items-center flex-wrap bg-white p-3 w-screen xl:w-5/6 bg-white'>

            <button
                className=' inline-flex p-3  rounded lg:hidden text-black ml-auto  outline-none'
                onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
                className={`${
                    active ? '' : 'hidden'
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
                <div
                    className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>


                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  '>
                            صفحه اصلی
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  '>
                            مشاورین املاک
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  '>
                            آژانس های املاک
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center   '>
                            ویلا شمال
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center   '>
                            پروژه ها
                        </a>
                    </Link>
                    <Link href='https://www.zoomila.com/blog/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center   '>
                            وبلاگ زومیلا
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center   '>
                            درباره زومیلا
                        </a>
                    </Link>
                </div>
            </div>
            <div className={`${
                active ? 'absolute left-5 top-5  w-1/3' : 'absolute flex left-5 lg:top-2 md:top-3 h w-1/3'
            } lg:left-5 lg:top-1 lg:w-1/5 h-16`}>

                <img src="/zoomilalogo.png" className=" items-center p-2 mr-4 object-scale-down  "/>

            </div>

        </nav>

    </header>
}

export default Header