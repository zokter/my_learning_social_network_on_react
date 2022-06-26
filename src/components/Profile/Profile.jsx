import React from "react";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo bigPic={props.bigPic}/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}

export default Profile;