import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";
import {addPost} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
addPost("Хватит верстать хуйню, да?");
addPost("А то не делаю нихуя только верстаю.")
addPost("Хотя тоже так то навык ага.")
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App data={state} addPost={addPost}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
