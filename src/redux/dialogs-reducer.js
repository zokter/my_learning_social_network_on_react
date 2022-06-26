const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE_TEXT_CHANGE = "NEW-MESSAGE-TEXT-CHANGE";

const initState = {
    friendsData: [
        {id: 0, name: "Я", avatar: "https://i1.sndcdn.com/artworks-hC34yAzy2u5yV9Uo-UvOY7g-t500x500.jpg",},
        {id: 1, name: "еблан", avatar: "https://i.kym-cdn.com/photos/images/original/001/278/402/844.jpg",},
        {id: 2, name: "и", avatar: "https://i.pinimg.com/736x/b2/14/89/b2148995d70acf9e7549d776142617d4.jpg",},
        {id: 3, name: "мне", avatar: "https://sun9-33.userapi.com/s/v1/if2/m_9kdpch0ZzcvTP0GGljdWlalo5q9xVoa6Z_BN5XXjO--dqOMbRM_kf4wcrTRDcnmi2NIX3WWyigZZGfInZLs9c0.jpg?size=512x478&quality=96&type=album",},
        {id: 4, name: "пахую", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNtnT7WdVHAPf4cup2BpWMJB-ofgJOgGyfg&usqp=CAU",},
    ],
    messagesData: [
        { id: 0, sender: true, message: "Как"},
        { id: 1, sender: false, message: "правильно"},
        { id: 2, sender: true, message: "какать"},
    ],
    avatar: "https://sun9-70.userapi.com/s/v1/ig2/OvRU3sFOCduw9efCVCSxVIYbsiiSnmELCnjR8E6OfiQevBcCcrPZ9z0K7jGMVivB9W_dQTGMSlB7DNOaVppPEWr4.jpg?size=604x400&quality=96&type=album",
    newMessageText: "",
}

const dialogsReducer = (state = initState, action) => {
    // debugger
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