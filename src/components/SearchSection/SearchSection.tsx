import classes from './SearchSection.module.scss'
import SearchInput from "./SearchInput/SearchInput";
import DefaultGrid from "../Grids/DefaultGrid";
import FilterProduct from "./FilterProduct/FilterProduct";
import {useState} from "react";



export function SearchSection() {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className={classes.container}>


            <div className={`${classes['row']}`}>
                <div className={`${classes['col-12']}`}>
                    <SearchInput inputValue={inputValue} setInputValue={setInputValue}/>
                </div>
            </div>

            <div className={`${classes['row']}`}>
                <div className={`
                ${classes['col-xxl-10']}
                ${classes['col-xl-9']}
                ${classes['col-lg-9']}
                ${classes['col-12']}
                `}>
                    <DefaultGrid inputValue={inputValue} />
                </div>
                <div className={`
                ${classes['col-xxl-2']}
                ${classes['col-xl-3']}
                ${classes['col-lg-3']}
                ${classes['d-none']}
                ${classes['d-xxl-block']}
                ${classes['d-xl-block']}
                ${classes['d-lg-block']}
                `}>
                    <FilterProduct/>
                </div>
            </div>
        </div>
    )
}