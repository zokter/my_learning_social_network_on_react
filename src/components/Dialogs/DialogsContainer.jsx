import {addMessageActionCreator, messageTextChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    const state = props.store.getState();

    const onNewMessageChange = (text) => {
        props.store.dispatch(messageTextChangeActionCreator(text))
    }

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    return(
        <Dialogs dialogsData={state.dialogsPage.friendsData}
                 messagesData={state.dialogsPage.messagesData}
                 newMessageText={state.dialogsPage.newMessageText}
                 onNewMessageChange={onNewMessageChange}
                 addMessage={addMessage}
        />
    )
}

export default DialogsContainer