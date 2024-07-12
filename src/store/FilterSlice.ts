import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";

export interface IFilter {
    supportHTTPS: boolean,
    supportCORS: boolean,
    category: string[] | null;
}


export interface IFilterState {
    filterState:IFilter;
    prepareFilterState:IFilter;
}



const initialState: IFilterState = {
    filterState:{
        supportHTTPS:false,
        supportCORS:false,
        category:null
    },
    prepareFilterState:{
        supportHTTPS:false,
        supportCORS:false,
        category:null
    }
};

const FilterSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        SetPrepareFilter_HTTPS: (state, action: PayloadAction<boolean>) => {
            state.prepareFilterState.supportHTTPS = action.payload;
            console.log('SetFilters_HTTPS prepare', state.prepareFilterState.supportHTTPS);
        },
        SetPrepareFilter_CORS: (state, action: PayloadAction<boolean>) => {
            state.prepareFilterState.supportCORS = action.payload;
            console.log('SetFilters_CORS prepare', state.prepareFilterState.supportCORS);
        },
        SetPrepareFilter_Category: (state, action: PayloadAction<string[] | null>) => {
            state.prepareFilterState.category = action.payload;
            console.log('SetPrepareFilter_Category prepare', state.prepareFilterState.category);
        },
        SetFilterState: (state) => {
            state.filterState = state.prepareFilterState
            console.log('from SetFilterState',state.filterState.category)
        },
        ResetFilters: (state) => {
            state.filterState.supportHTTPS = false
            state.filterState.supportCORS = false
            console.log('resetFilters', state);
        }
    },


});

export const {
    SetPrepareFilter_HTTPS,
    SetPrepareFilter_CORS,
    SetPrepareFilter_Category,
    SetFilterState,
    ResetFilters
} = FilterSlice.actions;

export default FilterSlice.reducer;