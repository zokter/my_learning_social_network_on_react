import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderWholeApp = (state) => {
    // debugger;
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App data={state} addPost={store.addPost.bind(store)} //и надо биндить контекст чтоб ф-цию дальше передать без изменения контекста
                /*addPost={store.addPost} тут есть подвох с контекстом вызова из за того что
                addPost не вызывается напрямую у store, а уходит в App и далее callback-ом, мы получаем изменение контекста вызова*/
                newPostTextChange={store.newPostTextChange.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}

store.subscribe(renderWholeApp)
renderWholeApp(store.getState());
