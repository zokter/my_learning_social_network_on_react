import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import layoutReducer from "./layout-reducer";
import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    layout: layoutReducer,
});

let store = configureStore({
    reducer: reducers,
    middleware,

})

window.store = store
export default store