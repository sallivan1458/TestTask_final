import classes from "./ModalWindow.module.scss";
import {ModalInvisible} from "../../store/ModalWindowSlice";
import {Button} from "@consta/uikit/Button";
import {IconFavoriteFilled} from "@consta/icons/IconFavoriteFilled";
import {IconFavoriteStroked} from "@consta/icons/IconFavoriteStroked";
import {useAppDispatch, useAppSelector} from "../../hooks/useDispatchAndSelector";
import {toggleFavorites} from "../../store/ProductSlice";

export default function ModalProductContent(){
    const dispatch = useAppDispatch();


    const {name, description, authorizationType, supportHTTPS, supportCORS, category, id}
        = useAppSelector(state => state.modalWindow.productInfo)
    const favoritesListId
        = useAppSelector(state => state.products.favoritesListId)
    const favorites = favoritesListId.includes(id)

    const handleFavourites =
        (event: React.MouseEvent<HTMLButtonElement>) => dispatch(toggleFavorites(id));


    return (
        <>

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

        </>
    )
}