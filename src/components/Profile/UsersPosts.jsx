import stl from "./UserPosts.module.css";
import React from "react";

const UsersPosts = (props) => {
    return(
    <div>
        <div className={stl.posts}>
            <div className={stl.item}>
                <img src={props.avatar}/>
                <div className={stl.message} >{props.postText}</div>
            </div>
        </div>
    </div>
    )
}

export default  UsersPosts