const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE_TEXT_CHANGE = "NEW-MESSAGE-TEXT-CHANGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length,
                sender: true,
                message: state.newMessageText
            }

            state.messagesData.push(newMessage)
            state.newMessageText = ""
            break;

        case NEW_MESSAGE_TEXT_CHANGE:
            state.newMessageText = action.inputText;
            break;
    }
    return state;
}

export const addMessageActionCreator = () => {
    return{
        type: ADD_MESSAGE,
    }
}

export const messageTextChangeActionCreator = (text) => {
    return{
        type: NEW_MESSAGE_TEXT_CHANGE,
        inputText: text,
    }
}

export default dialogsReducer