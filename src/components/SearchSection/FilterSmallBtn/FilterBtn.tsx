import {Button} from "@consta/uikit/Button";
import {IconFunnel} from "@consta/icons/IconFunnel";
import classes from "./FilterBtn.module.scss";
import {SideBarOpen} from "../../../store/SideBarSlice";
import React from "react";
import {useAppDispatch} from "../../../hooks/useDispatchAndSelector";

export default function FilterBtn(){
    const dispatch = useAppDispatch()


    return(

        <div>
            <div className={`${classes['d-block']} ${classes['d-sm-none']} `}>
                <Button
                    onClick={() => dispatch(SideBarOpen())}
                    label="Фильтр" view="secondary" iconLeft={IconFunnel} onlyIcon/>
            </div>

            <div className={`${classes['d-none']} ${classes['d-sm-block']} `}>
                <Button
                    onClick={() => dispatch(SideBarOpen())}
                    label="Фильтр" view="secondary" iconLeft={IconFunnel}/>
            </div>
        </div>

    )
}