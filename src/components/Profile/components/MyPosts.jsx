import React from "react";
import UsersPosts from "../UsersPosts";

const MyPosts = (props) => {

    const addPost = (value) => {
        alert(value)
    }
    const postElements = props.postsData.map(post => { return <UsersPosts key={post.id} avatar={props.avatar} postText = {post.postText}/>})

    return (
        <>
            <div>
                <textarea></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postElements}
        </>
    )
}

export default MyPosts