import React from "react";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import MyPosts from "./components/MyPosts/MyPosts";

const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo bigPic={props.bigPic}/>
            <MyPosts avatar={props.avatar}
                     postsData={props.postsData}
                     addPost={props.addPost}
                     newPostTextChange={props.newPostTextChange}
                     newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;