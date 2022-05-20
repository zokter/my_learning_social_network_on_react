import React from "react";
import stl from "./Navigation.module.css";
// import {NavLink} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const Navigation = (props) => {
    return(
        <nav className={stl.nav}>
            <NavBar/>
            <FriendsBlock friendsData={props.friendsData}/>
        </nav>
    )
}

export default Navigation;