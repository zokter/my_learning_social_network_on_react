import React from "react";
import stl from "../../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    const ActiveLink = ({isActive}) => (isActive ? `${stl.active}` : "");
    const thisRoute = "dialogs";

    let path = `/${thisRoute}/${props.id}`;
    return (
        <NavLink to={path} className={ActiveLink}>
            <div className={stl.dialog}>
                <img src={props.friendsAvatar}/>
                {props.name}
            </div>
        </NavLink>
    )
}

export default DialogItem