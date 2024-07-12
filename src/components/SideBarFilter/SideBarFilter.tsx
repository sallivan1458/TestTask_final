import {SideBarClose} from "../../store/SideBarSlice";
import React, {useState} from 'react';
import classes from "./SideBarFilter.module.scss";
import {Sidebar} from "@consta/uikit/Sidebar";
import {useAppDispatch, useAppSelector} from "../../hooks/useDispatchAndSelector";
import {
    SetPrepareFilter_HTTPS,
    SetPrepareFilter_CORS,
    SetFilterState,
    SetPrepareFilter_Category
} from "../../store/FilterSlice";
import {Button} from "@consta/uikit/Button";
import {Combobox} from "@consta/uikit/Combobox";
import {Item, items} from "../../data/itemsForCombobox";

export default function SideBarFilter() {

    const dispatch = useAppDispatch();
    const isSidebarOpen = useAppSelector(state => state.sideBar.isSideBarOpen);
    const filters = useAppSelector(state => state.filter)


    const toggleHTTPS = () => {
        dispatch( SetPrepareFilter_HTTPS( !filters.prepareFilterState.supportHTTPS ) )
    }
    const toggleCORS = () => {
        dispatch( SetPrepareFilter_CORS( !filters.prepareFilterState.supportCORS ) )
    }

    const [value, setValue] = useState<Item[] | null>();
    const [searchValue, setSearchValue] = useState<string | undefined>();



    return (
        <>
            <Sidebar
                className={classes.sideBar_Y}
                size={'m'}
                isOpen={isSidebarOpen}
                onClickOutside={() => dispatch(SideBarClose())}
                onEsc={() => dispatch(SideBarClose())}
            >
                <div className={classes.sideBarContainer_Y}>
                    <div className={classes.head}>
                        <div className={classes.name}>Фильтры</div>
                        <div
                            onClick={() => dispatch(SideBarClose())}
                            className={classes.exit}
                        >&times;</div>
                    </div>
                    <div className={classes.main}>
                        <div className={classes.filterSectionFrame}>
                            <span className={classes.category}>Категории</span>
                            <Combobox
                                className={classes.myStyleForInput}
                                size={'xs'}
                                placeholder="Выберите вариант"
                                items={items}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    // Получить выбранные элементы из `items`
                                    if (newValue !== null) {
                                        dispatch( SetPrepareFilter_Category(newValue.map(item => item.label)) )
                                    } else { dispatch( SetPrepareFilter_Category(null) ) }
                                }}
                                searchValue={searchValue}
                                onSearchValueChange={setSearchValue}
                                multiple
                                getItemLabel={(item) => item.label}
                            />
                            <div>
                                <input
                                    type={'checkbox'}
                                    onChange={() => toggleHTTPS()}
                                    checked={filters.prepareFilterState.supportHTTPS}
                                />
                                <span>  только HTTPS</span>
                            </div>
                            <div>
                                <input
                                    type={'checkbox'}
                                    onChange={() => toggleCORS()}
                                    checked={filters.prepareFilterState.supportCORS}
                                />
                                <span>  CORS</span>
                            </div>
                        </div>
                    </div>


                    <div className={classes.footer}>
                        <Button
                            onClick={() => dispatch(SetFilterState())}
                            size={'s'} label="Применить" view="secondary"
                        />
                    </div>


                </div>



            </Sidebar>
        </>
    );
}