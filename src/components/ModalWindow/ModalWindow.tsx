import classes from './ModalWindow.module.scss';
import {ModalInvisible} from "../../store/ModalWindowSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/useDispatchAndSelector";
import { IProduct, toggleFavorites} from "../../store/ProductSlice";
import {IconFavoriteFilled} from "@consta/icons/IconFavoriteFilled";
import {IconFavoriteStroked} from "@consta/icons/IconFavoriteStroked";
import {Button} from "@consta/uikit/Button";

interface ModalWindowProps {
    active:boolean,
    product:IProduct,
}

export default function ModalWindow({active, product}: ModalWindowProps) {

    const dispatch = useAppDispatch();
    const {name, description, authorizationType, supportHTTPS, supportCORS, category, id}
        = product
    const favorites = useAppSelector(state => state.products.list[Number(id) - 1].favorites)
    const handleFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(toggleFavorites(product.id))
    };
    const loading = useAppSelector(state => state.products.loading)


    if (!loading) {
        return (
            <div
                className={`
            ${classes[active && 'active']}
            ${classes['modalContainer']}
            `}
                onClick={() => dispatch(ModalInvisible())}>
                <div
                    className={`
                ${classes['modalContent']}
                ${classes[active && 'active']}
                `}
                    onClick={e => e.stopPropagation()}>
                    {active &&
                        <div className={classes.frame}>
                            <div className={classes.head}>
                                <div className={classes.name}>{name}</div>
                                <div
                                    onClick={() => dispatch(ModalInvisible())}
                                    className={classes.exit}
                                >&times;</div>
                            </div>
                            <div className={classes.desc_frame}>
                                <div className={classes.desc}>Описание: {description}</div>
                                <div className={classes.desc}>Тип авторизации: {authorizationType}</div>
                                <div className={classes.desc}>Поддержка https: {supportHTTPS ? <>да</> : <>нет</>}</div>
                                <div className={classes.desc}>Поддержка CORS: {supportCORS ? <>да</> : <>нет</>}</div>
                                <div className={classes.desc}>Категория: {category}</div>
                                <Button
                                    size={'xs'}
                                    className={classes['btnInFavorites']}
                                    iconRight={favorites ? IconFavoriteFilled : IconFavoriteStroked}
                                    label={favorites ? 'в избранном' : 'в избранное'}
                                    onClick={handleFavourites}
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}