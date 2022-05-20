import React from "react";
import stl from "./FriendsItem.module.css"
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    return (
        <NavLink className={stl.link} to={`dialogs/${props.id}`}>
            <div className={stl.photo}>
                <img src={props.friendAvatar}/>
            </div>
            <div className={stl.friendName}>
                {props.friendName}
            </div>
        </NavLink>
    )
}

export default FriendsItem