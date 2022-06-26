import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import stl from "../../App.module.css"
import {Outlet} from "react-router-dom"
import StoreContext from "../../StoreContext";


const Layout = (props) => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                return(
                <>
                    <Header/>
                    <Navigation friendsData={store.getState().layout.friendsData}/>
                    <div className={stl.content}>
                        <Outlet/>
                    </div>
                </>)
            }}

        </StoreContext.Consumer>

    )
}

export default Layout