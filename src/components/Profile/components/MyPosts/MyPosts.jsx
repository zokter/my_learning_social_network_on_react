import React from "react";
import UsersPosts from "../../UsersPosts";
import stl from "./MyPosts.module.css"
import {addPostActionCreator, postTextChangeActionCreator} from "../../../../redux/profile-reducer";

const MyPosts = (props) => {
    // debugger;
    let newPostElement = React.createRef();

    let postElements = props.postsData.map(post => {
        return <UsersPosts key={post.id} avatar={props.avatar} postText={post.postText}/>
    })

    const addPost = () => {
        // debugger;
        //ссылка на элемент обладает свойством current, который ссылается на нативный html элемент
        let text = newPostElement.current.value;
        if(text) {
            props.dispatch(addPostActionCreator());
        }
    }

    const newPostTextChange = () => {
        let text = newPostElement.current.value;
        // props.newPostTextChange(text); // и вот тут как раз и меняется тот самый контекст вызова, о котором написано в App.js
        props.dispatch(postTextChangeActionCreator(text));
    }

    return (
        <>
            <div className={stl.newPostInputWrapper}>
                <div className={stl.teatAreaWrapper}>
                    <textarea className={stl.textArea}
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={newPostTextChange}
                    />
                </div>
                <div className={stl.buttonWrapper}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postElements}
        </>
    )
}

export default MyPosts