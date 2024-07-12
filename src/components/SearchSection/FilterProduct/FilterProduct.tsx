import classes from './FilterProduct.module.scss';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../hooks/useDispatchAndSelector";
import {
    SetPrepareFilter_CORS,
    SetPrepareFilter_HTTPS,
    SetPrepareFilter_Category,
    SetFilterState,
} from "../../../store/FilterSlice";
import {Button} from "@consta/uikit/Button";
import {Combobox} from "@consta/uikit/Combobox";
import {Item, items} from "../../../data/itemsForCombobox";


export default function FilterProduct() {

    const dispatch = useDispatch();
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
        <div className={`${classes['filterFrame']}`}>
            <span>Фильтры</span>
            <div className={classes.filterArea}>
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

            <Button
                onClick={() => dispatch(SetFilterState())}
                size={'s'} label="Применить" view="secondary"/>
        </div>
    )
}