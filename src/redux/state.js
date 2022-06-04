let store = {
    _state: {
        profilePage:{ //тут данные разбиты на ветки. по обслуживаемым ими страницам эта для профиля
            postsData :[
                {id: 0, postText: "Если бы вы знали как мне похуй, вы бы расплакались.", likesCount: 1}
            ],
            bigPic: "data:image/jpeg;base64,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",
            avatar: "https://sun9-70.userapi.com/s/v1/ig2/OvRU3sFOCduw9efCVCSxVIYbsiiSnmELCnjR8E6OfiQevBcCcrPZ9z0K7jGMVivB9W_dQTGMSlB7DNOaVppPEWr4.jpg?size=604x400&quality=96&type=album",
            newPostText: "",
        },

        dialogsPage:{ //эта для диалогов
            friendsData: [
                {id: 0, name: "Я", avatar: "https://i1.sndcdn.com/artworks-hC34yAzy2u5yV9Uo-UvOY7g-t500x500.jpg",},
                {id: 1, name: "еблан", avatar: "https://i.kym-cdn.com/photos/images/original/001/278/402/844.jpg",},
                {id: 2, name: "и", avatar: "https://i.pinimg.com/736x/b2/14/89/b2148995d70acf9e7549d776142617d4.jpg",},
                {id: 3, name: "мне", avatar: "https://sun9-33.userapi.com/s/v1/if2/m_9kdpch0ZzcvTP0GGljdWlalo5q9xVoa6Z_BN5XXjO--dqOMbRM_kf4wcrTRDcnmi2NIX3WWyigZZGfInZLs9c0.jpg?size=512x478&quality=96&type=album",},
                {id: 4, name: "пахую", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNtnT7WdVHAPf4cup2BpWMJB-ofgJOgGyfg&usqp=CAU",},
            ],
            messagesData: [
                { id: 1, sender: true, message: "Как"},
                { id: 2, sender: false, message: "правильно"},
                { id: 3, sender: true, message: "какать"},
            ],
            avatar: "https://sun9-70.userapi.com/s/v1/ig2/OvRU3sFOCduw9efCVCSxVIYbsiiSnmELCnjR8E6OfiQevBcCcrPZ9z0K7jGMVivB9W_dQTGMSlB7DNOaVppPEWr4.jpg?size=604x400&quality=96&type=album",

        },

        layout: {
            friendsData: [
                {id: 0, name: "Я", avatar: "https://i1.sndcdn.com/artworks-hC34yAzy2u5yV9Uo-UvOY7g-t500x500.jpg",},
                {id: 1, name: "еблан", avatar: "https://i.kym-cdn.com/photos/images/original/001/278/402/844.jpg",},
                {id: 2, name: "и", avatar: "https://i.pinimg.com/736x/b2/14/89/b2148995d70acf9e7549d776142617d4.jpg",},
                {id: 3, name: "мне", avatar: "https://sun9-33.userapi.com/s/v1/if2/m_9kdpch0ZzcvTP0GGljdWlalo5q9xVoa6Z_BN5XXjO--dqOMbRM_kf4wcrTRDcnmi2NIX3WWyigZZGfInZLs9c0.jpg?size=512x478&quality=96&type=album",},
                {id: 4, name: "пахую", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNtnT7WdVHAPf4cup2BpWMJB-ofgJOgGyfg&usqp=CAU",},
            ],
        }

    },
    _callSubscriber() {
        console.log("State changed.")
    },

    getState(){
        return this._state
    },
    subscribe(observer) { //observer
        this._callSubscriber = observer;
    },

    _addPost(){
        // debugger;
        let newPost = {
            id: this._state.profilePage.postsData.length,
            postText: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        // console.log(newPost.postText);
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    _newPostTextChange(inputText){
        // debugger;
        this._state.profilePage.newPostText = inputText;
        this._callSubscriber(this._state);
    },

    dispatch(action){ //{type: 'ADD-POST' }
        // debugger;
        if(action.type === "ADD-POST"){
            this._addPost();
        }
        else if (action.type === "NEW-POST-TEXT-CHANGE"){
            this._newPostTextChange(action.inputText)
        }

    }
}


export default store
window.store = store