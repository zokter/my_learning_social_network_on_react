import React from "react";
import ProfileInfo from "./components/ProfileInfo";
import MyPosts from "./components/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo bigPic={props.bigPic}/>
            <MyPosts avatar={props.avatar} postsData={props.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;