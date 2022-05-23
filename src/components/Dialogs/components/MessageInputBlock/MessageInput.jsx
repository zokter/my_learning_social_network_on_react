import React from "react";
import stl from "./MessageInput.module.css"

const MessageInput = (props) => {
    return(
        <div className={stl.messageInputWrapper}>
            <textarea className={stl.textField}></textarea>
            <button className={stl.button}>➾</button>
        </div>
    )
}

export default MessageInput