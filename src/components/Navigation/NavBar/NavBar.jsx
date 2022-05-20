import React from "react";
import stl from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const ActiveLink = ({isActive}) => isActive ? `${stl.active}` : `${stl.inactive}`;

    return (
        <div className={stl.navigationWrapper}>
            <div className={stl.item}>
                <NavLink to="/profile" className={ActiveLink}>Profile</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/dialogs" className={ActiveLink}>Dialogs</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/music" className={ActiveLink}>Music</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/news" className={ActiveLink}>News</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/settings" className={ActiveLink}>Settings</NavLink>
            </div>
        </div>
    )
}

export default NavBar