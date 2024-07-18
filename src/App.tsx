import classes from './App.module.scss'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import React, { useEffect, useState } from "react";
import {useAppDispatch, useAppSelector} from "./hooks/useDispatchAndSelector";
import {fetchProducts} from "./store/ProductSlice";
import NavSection from "./components/navSection/NavSection";
import {SearchSection} from "./components/SearchSection/SearchSection";
import FavoritesGrid from "./components/Grids/FavoritesGrid";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import SideBarFilter from "./components/SideBarFilter/SideBarFilter";


export function App() {

    const dispatch = useAppDispatch();
    const { productInfo} = useAppSelector(state => state.modalWindow)
    const {loading, error} = useAppSelector(state => state.products)
    const [tab, setTab] = useState('search')



    useEffect(() => {
        dispatch( fetchProducts() )
    }, [dispatch]);




    return(
        <Theme preset={presetGpnDefault}>

            {error && <h3>{error}</h3>}
            <NavSection active={tab} onChange={tabName => setTab(tabName)}></NavSection>
            {tab === 'search' && <SearchSection/>}
            {tab === 'favorites' && <FavoritesGrid/>}
            {productInfo!==undefined && <ModalWindow/>}
            <SideBarFilter/>

        </Theme>
    )
}