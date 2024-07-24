import classes from './FavoritesGrid.module.scss'
import Product from "../Product/Product";
import {useAppSelector} from "../../hooks/useDispatchAndSelector";
import {IProduct} from "../../store/ProductSlice";



export default function FavoritesGrid() {
    const products:IProduct[] = useAppSelector(state => state.products.list);
    const favoritesListId = useAppSelector(state => state.products.favoritesListId)
    return(
        <div className={classes.container}>
            <h3>Избранное</h3>
            <div className={`${classes['row']} ${classes['gy-2']} ${classes['gx-2']}`}>
                {products
                    .filter(product => favoritesListId.includes(product.id) )
                    .map((product: IProduct, _) => (
                    <div
                        className={`${classes['col-xxl-6']} ${classes['col-lg-6']} ${classes['col-md-10']} ${classes['col-15']}`}
                        key={product.id}>
                        <Product product={product}></Product>
                    </div>
                ))}
            </div>
            {favoritesListId.length == 0 && <h4 className={`${classes['emptyString']}`}>список пуст</h4>}        </div>

    )
}