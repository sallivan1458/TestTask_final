import classes from './SerachInput.module.scss'
import {TextField, TextFieldPropOnChange, TextFieldProps} from "@consta/uikit/TextField";
import React, {useState, useEffect, useRef} from "react";
import {IconSearchStroked} from "@consta/icons/IconSearchStroked";
import FilterBtn from "../FilterSmallBtn/FilterBtn";

interface ISearchInputProps {
    inputValue:string,
    setInputValue:React.Dispatch<React.SetStateAction<string>>
}

export function SearchInput( {inputValue, setInputValue}:ISearchInputProps ) {
    const [inputDebounceValue, setInputDebounceValue] = useState('');
    const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current !== null) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, []);

    const handleInputChange: TextFieldPropOnChange = (value) => {
        if (debounceTimeoutRef.current !== null) {
            clearTimeout(debounceTimeoutRef.current);
        }
        if (value == null) {
            setInputDebounceValue("");
            debounceTimeoutRef.current = setTimeout(() => {
                setInputValue("");
            }, 500);
        } else {
            setInputDebounceValue(value);
            debounceTimeoutRef.current = setTimeout(() => {
                setInputValue(value);
            }, 500);
        }
    };

    return (
        <div className={`
        ${classes['d-flex']}
        `}>
            <div className={`${classes['element1']} ${classes['flex-grow-1']}`}>
                <TextField
                    className={`${classes['input']}`}
                    leftSide={IconSearchStroked}
                    type={"text"}
                    value={inputDebounceValue}
                    placeholder={'Введите текст'}
                    onChange={handleInputChange}
                    withClearButton
                    onClear={() => setInputDebounceValue('')}
                ></TextField>
            </div>
            <div
                className={`
                ${classes['element2']}
                ${classes['d-xxl-none']}
                ${classes['d-xl-none']}
                ${classes['d-lg-none']}
                ${classes['d-md-block']}
                ${classes['d-sn-block']}
                `}
            >
                <FilterBtn/>
            </div>
        </div>
    )
}

export default SearchInput;