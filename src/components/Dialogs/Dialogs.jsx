import React from "react";
import stl from "./Dialogs.module.css"
import DialogItem from "./components/DialogItem/DialogItem";
import MessageItem from "./components/MessageItem/MessageItem";
import MessageInput from "./components/MessageInputBlock/MessageInput";


const Dialogs = (props) => {
    debugger;
    // const dialogsData = props.friendsData;
    // const messagesData = props.messagesData;

    const dialogElements = props.dialogsData.map((dialog, index) =>
        <DialogItem
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
            avatar={props.avatar}
            friendsAvatar={props.dialogsData[index].avatar}
        />)
    const messageElements = props.messagesData.map(message => {
        return (
            <MessageItem
                key={message.id}
                id={message.id}
                message={message.message}
                sender={message.sender}
                avatar={props.avatar}
                friendsAvatars={props.friendsAvatars}
            />
        )
    })
    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>
                {dialogElements}
            </div>
            <div className={stl.messages}>
                <div className={stl.messageItemWrapper}>
                    {messageElements}
                </div>
            </div>
            <div className={stl.inputMessageWrapper}>
                <MessageInput newMessageText={props.newMessageText}
                              addMessage={props.addMessage}
                              onNewMessageChange={props.onNewMessageChange}
                />
            </div>
        </div>
    )
}

export default Dialogs