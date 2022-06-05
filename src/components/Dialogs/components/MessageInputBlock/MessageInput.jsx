import React from "react";
import stl from "./MessageInput.module.css"
import {addMessageActionCreator, messageTextChangeActionCreator} from "../../../../redux/dialogs-reducer";


const MessageInput = (props) => {

    let newMessageArea = React.createRef();

    const onNewMessageChange = () => {
        let text = newMessageArea.current.value;
        props.dispatch(messageTextChangeActionCreator(text))
    }

    const addMessage = () => {
        let text = newMessageArea.current.value;

        if(text){
            props.dispatch(addMessageActionCreator())
        }
    }

    return(
        <div className={stl.messageInputWrapper}>
            <textarea ref={newMessageArea}
                      onChange={onNewMessageChange}
                      className={stl.textField}
                      value={props.newMessageText}
            />
            <button onClick={addMessage} className={stl.button}>➾</button>
        </div>
    )
}

export default MessageInput