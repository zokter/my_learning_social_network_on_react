import {addPostActionCreator, postTextChangeActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    const textChange = (text) => {
        props.store.dispatch(postTextChangeActionCreator(text))
    }
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    return <MyPosts
        postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
        avatar={state.profilePage.avatar}
        addPost={addPost}
        textChange={textChange}
    />
}

export default MyPostsContainer