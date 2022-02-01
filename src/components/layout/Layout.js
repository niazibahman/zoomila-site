import Header from "../header/Header";
import React from "react";
function Layout({children}) {
    return <div dir={'rtl'} >
    <Header/>
    {children}
    </div>
        }
export default Layout