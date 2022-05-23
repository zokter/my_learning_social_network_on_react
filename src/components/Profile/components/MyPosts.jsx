import React from "react";
import UsersPosts from "../UsersPosts";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postElements = props.postsData.map(post => {
        return <UsersPosts key={post.id} avatar={props.avatar} postText={post.postText}/>
    })

    const addPost = () => {
        // debugger;
        //ссылка на элемент обладает свойством current, который ссылается на нативный html элемент
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postElements}
        </>
    )
}

export default MyPosts