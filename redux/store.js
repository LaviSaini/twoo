import {createStore,combineReducers,applyMiddleware} from "redux";

import { persistStore, persistReducer } from 'redux-persist'

import AsyncStorage from "@react-native-async-storage/async-storage";

import thunk from "redux-thunk";

import AuthReducer from "./auth/AuthReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
   

const middlewares = [thunk];

const rootReducer = combineReducers({
    auth: AuthReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(rootReducer,applyMiddleware(...middlewares))

export const store = createStore(persistedReducer,applyMiddleware(...middlewares))

export const persistor = persistStore(store)