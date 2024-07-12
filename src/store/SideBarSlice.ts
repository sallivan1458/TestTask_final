import { createSlice } from '@reduxjs/toolkit';


interface IModalState {
    isSideBarOpen:boolean
}


const initialState: IModalState = {
   isSideBarOpen:false,
};

const SideBarSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        SideBarOpen: (state) => {
            state.isSideBarOpen = true
            console.log('sideBarOpen')
        },
        SideBarClose: (state) => {
            state.isSideBarOpen = false
            console.log('sideBarClose')
        }
    },


});

export const {
    SideBarOpen,
    SideBarClose
} = SideBarSlice.actions;

export default SideBarSlice.reducer;