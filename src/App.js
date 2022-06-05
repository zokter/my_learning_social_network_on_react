import stl from "./App.module.css"
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/NotFound/404";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Setings/Setings";


// Компонент в React - это ф-ция возвращающая некоторый JSX, корневой эллемент должен быть только 1

function App(props) {
    // debugger;
    return (
        <div className={stl.appWrapper}>
            <Routes>
                <Route path = "/" element = {<Layout friendsData={props.data.layout.friendsData}/>}>
                    <Route index element={<Profile
                        postsData={props.data.profilePage.postsData}
                        avatar={props.data.profilePage.avatar}
                        bigPic={props.data.profilePage.bigPic}
                        newPostText={props.data.profilePage.newPostText}
                        dispatch={props.dispatch}

                    />}/>
                    <Route path = "/profile" element={<Profile
                        postsData={props.data.profilePage.postsData}
                        avatar={props.data.profilePage.avatar}
                        bigPic={props.data.profilePage.bigPic}
                        newPostText={props.data.profilePage.newPostText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path = "/dialogs/*" element={<Dialogs
                        friendsData={props.data.dialogsPage.friendsData}
                        messagesData={props.data.dialogsPage.messagesData}
                        avatar={props.data.dialogsPage.avatar}
                        newMessageText={props.data.dialogsPage.newMessageText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path = "/music" element={<Music/>}/>
                    <Route path = "/news" element={<News/>}/>
                    <Route path = "/settings" element={<Settings/>}/>
                    <Route path = "*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
