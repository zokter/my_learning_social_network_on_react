import {addPostActionCreator, postTextChangeActionCreator} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    // debugger;
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                const textChange = (text) => {
                    store.dispatch(postTextChangeActionCreator(text))
                }
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                return (
                    <MyPosts
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                        avatar={state.profilePage.avatar}
                        addPost={addPost}
                        textChange={textChange}
                    />)
            }}

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer