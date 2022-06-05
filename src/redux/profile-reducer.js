const ADD_POST = "ADD-POST";
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length,
                postText: state.newPostText,
                likesCount: 0,
            };

            state.postsData.push(newPost);
            state.newPostText = "";
            break;

        case NEW_POST_TEXT_CHANGE:
            state.newPostText = action.inputText;
            break;
    }
    return state;
}

export const addPostActionCreator = () => {
    return{
        type: ADD_POST,
    }
}

export const postTextChangeActionCreator = (text) => {
    return{
        type: NEW_POST_TEXT_CHANGE,
        inputText: text
    }
}

export default profileReducer