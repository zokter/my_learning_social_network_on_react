import React from "react";
import stl from "./FriendsBlock.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const FriendsBlock = (props) => {
    let friends = props.friendsData.slice(0,3);

    let friendItem = friends.map((friend, index) => <FriendsItem
        className={`${stl.friendItem}${index}`}
        friendAvatar={friend.avatar}
        friendName={friend.name}
        id={friend.id}
        key={friend.id}
    />)

    return(
        <div className={stl.friendsBlock}>
            {friendItem}
        </div>
    )
}
export default FriendsBlock