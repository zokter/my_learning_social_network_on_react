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
    let data = props.props;
    return (
        <div className={stl.appWrapper}>
            <Routes>
                <Route path = "/" element = {<Layout friendsData={data.layout.friendsData}/>}>
                    <Route index  element={<Profile
                        postsData={data.profilePage.postsData}
                        avatar={data.profilePage.avatar}
                        bigPic={data.profilePage.bigPic}
                    />}/>
                    <Route path = "/profile" element={<Profile
                        postsData={data.profilePage.postsData}
                        avatar={data.profilePage.avatar}
                        bigPic={data.profilePage.bigPic}
                    />}/>
                    <Route path = "/dialogs/*" element={<Dialogs
                        friendsData={data.dialogsPage.friendsData}
                        messagesData={data.dialogsPage.messagesData}
                        avatar={data.dialogsPage.avatar}
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
