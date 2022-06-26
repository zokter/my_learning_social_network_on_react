import {addMessageActionCreator, messageTextChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                const onNewMessageChange = (text) => {
                    store.dispatch(messageTextChangeActionCreator(text))
                }

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                return (
                    <Dialogs dialogsData={state.dialogsPage.friendsData}
                             messagesData={state.dialogsPage.messagesData}
                             newMessageText={state.dialogsPage.newMessageText}
                             onNewMessageChange={onNewMessageChange}
                             addMessage={addMessage}
                    />)
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer