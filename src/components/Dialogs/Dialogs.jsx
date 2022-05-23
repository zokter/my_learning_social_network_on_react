import React from "react";
import stl from "./Dialogs.module.css"
import DialogItem from "./components/DialogItem/DialogItem";
import MessageItem from "./components/MessageItem/MessageItem";




const Dialogs = (props) => {

    const dialogsData = props.friendsData;
    const messagesData = props.messagesData;

    const dialogElements = dialogsData.map((dialog, index) =>
        <DialogItem
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
            avatar={props.avatar}
            friendsAvatar={props.friendsData[index].avatar}
        />)
    const messageElements = messagesData.map(message =>
    {return <MessageItem
        key={message.id}
        id={message.id}
        message={message.message}
        sender={message.sender}
        avatar={props.avatar}
        friendsAvatars={props.friendsAvatars}
    />})

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>
                {dialogElements}
            </div>
            <div className={stl.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs