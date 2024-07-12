import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";
import {IProduct} from "./ProductSlice";




interface IModalState {
    productInfo:IProduct | undefined;
    isModalOpen:boolean
}


const initialState: IModalState = {
    productInfo: {
        id:'1',
        name:'first',
        description:'firstDes',
        authorizationType: 'apiKey',
        supportHTTPS:true,
        supportCORS:true,
        category:'cats',
        favorites:false
    },
    isModalOpen: false,
};

const ModalWindowSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        ModalVisible: (state, action: PayloadAction<IProduct>) => {
            state.isModalOpen = true
            state.productInfo = action.payload;
        },
        ModalInvisible: (state) => {
            state.isModalOpen = false
        }
    },


});

export const {
    ModalVisible,
    ModalInvisible,
} = ModalWindowSlice.actions;

export default ModalWindowSlice.reducer;