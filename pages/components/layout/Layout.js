import Header from "../header/Header";
import React from "react";
import Footer from "../footer/Footer";

function Layout({children}) {
    return <div dir={'rtl'} >
        <Header/>

        {children}

        <Footer/>
    </div>
}

export default Layout