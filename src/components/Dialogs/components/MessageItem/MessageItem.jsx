import React from "react";
import stl from "./MessageItem.module.css"


const MessageItem = (props) =>{
    // debugger;
    const messagePosition = () => (props.sender ? `${stl.user}` : `${stl.friend}`);
    // console.log(messagePosition())
    return(
        <div className={messagePosition()}>{props.message}</div>
    )
}

export default MessageItem