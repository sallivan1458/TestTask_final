import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";
import {IProduct} from "./ProductSlice";




interface IModalState {
    hasSmtData: boolean
    productInfo?:IProduct | undefined;
    isModalOpen:boolean
}


const initialState: IModalState = {
    hasSmtData: false,
    productInfo: undefined,
    isModalOpen: false,
};

const ModalWindowSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        ModalVisible: (state, action: PayloadAction<IProduct>) => {
            state.productInfo = action.payload;
            state.isModalOpen = true
            state.hasSmtData = true
        },
        ModalInvisible: (state) => {
            state.isModalOpen = false
            state.hasSmtData = false
            console.log(state.isModalOpen)
        }
    },


});

export const {
    ModalVisible,
    ModalInvisible,
} = ModalWindowSlice.actions;

export default ModalWindowSlice.reducer;