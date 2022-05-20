import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import stl from "../../App.module.css"
import {Outlet} from "react-router-dom"


const Layout = (props) => {
    return (
        <>
            <Header/>
            <Navigation friendsData={props.friendsData}/>
            <div className={stl.content}>
                <Outlet/>
            </div>
        </>

    )
}

export default Layout