import { configureStore,combineReducers } from '@reduxjs/toolkit';
import productReducer from './ProductSlice'
import modalWindowReducer from './ModalWindowSlice'
import sideBarReducer from './SideBarSlice'
import filterReducer from './FilterSlice'


import {
    persistStore,
    persistReducer ,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist:['products'],
    blacklist:['modalWindow','sideBar', 'filter'],
}

const rootReducer = combineReducers({
    products: productReducer,
    modalWindow: modalWindowReducer,
    sideBar: sideBarReducer,
    filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store
export const persistor = persistStore(store);



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch