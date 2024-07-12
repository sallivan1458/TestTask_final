import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";
import {AppDispatch} from "./index";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {defaultProductsArray} from "../data/defaultProductsArray";


export interface IProduct{
    id:string;
    name:string,
    description:string,
    authorizationType: string,
    supportHTTPS:boolean,
    supportCORS:boolean,
    category:string,
    favorites: boolean
}


export const fetchProducts = () => {
    return async (dispatch:AppDispatch) => {

        const { checkPersistRoot } = useLocalStorage('persist:root')
        if ( !checkPersistRoot('products') ) {
            try {
                dispatch(fetchProductsRequest())
                setTimeout(() => {
                    dispatch(fetchProductsSuccess(defaultProductsArray))
                    console.log('fetching products...')
                    // throw new Error('test error')
                }, 900)
            } catch (e) {
                dispatch(fetchProductsError('error'))
            }
        }
    }
};





interface IProductState  {
    list: IProduct[],
    loading: boolean,
    error: string | null,
}

const initialState: IProductState = {
    list: [],
    loading: true,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProductsRequest(state){
            state.error = null;
        },
        fetchProductsSuccess(state, action: PayloadAction<IProduct[]>) {
            state.loading = false;
            state.error = null;
            state.list = action.payload;

        },
        fetchProductsError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        toggleFavorites(state, action: PayloadAction<string>) {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.favorites = !toggledTodo.favorites;
            }
        },
    }
});

export const {
    toggleFavorites,
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsError
} = productSlice.actions;

export default productSlice.reducer;