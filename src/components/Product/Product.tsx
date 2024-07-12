import classes from './Product.module.scss';
import {Button} from "@consta/uikit/Button";
import {IconFavoriteFilled} from "@consta/icons/IconFavoriteFilled";
import '@fontsource/inter';
import React from "react";
import {IconFavoriteStroked} from "@consta/icons/IconFavoriteStroked";
import useWindowSize from "../../hooks/useWindowSize";
import {IProduct, toggleFavorites} from "../../store/ProductSlice";
import {useAppDispatch} from "../../hooks/useDispatchAndSelector";
import { ModalVisible} from "../../store/ModalWindowSlice";


interface IProductProps{
    product:IProduct
    [key: string]: any;
}

export default function Product ({product ,...props}:IProductProps){

    const dispatch = useAppDispatch();
    const { width } = useWindowSize();


    const handleFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(toggleFavorites(product.id))
        event.stopPropagation()
    };


    return (
        <>
            <div
                className={`${classes['frame']}`}
                onClick={() => {
                    dispatch(ModalVisible( product ));
                }}>
                    <div className={classes['nameAPI']}>{ product.name }</div>
                    <Button
                        size={width < 1200 ? 'xs' : 's'}
                        className={classes['btnInFavorites']}
                        iconRight={product.favorites ? IconFavoriteFilled : IconFavoriteStroked}
                        label={product.favorites ? 'в избранном' : 'в избранное'}
                        onClick={handleFavourites}
                    />
            </div>
        </>

    )
}