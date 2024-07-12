import classes from './DefaultGrid.module.scss'
import Product from "../Product/Product";
import { useAppSelector } from "../../hooks/useDispatchAndSelector";
import {IProduct} from "../../store/ProductSlice";
import React from "react";
import {IFilter} from "../../store/FilterSlice";

interface IDefaultGridProps {
    inputValue:string
}

export default function DefaultGrid({inputValue}:IDefaultGridProps) {
    const products = useAppSelector(state => state.products.list);
    const loading = useAppSelector(state => state.products.loading);
    const { supportHTTPS, supportCORS, category}:IFilter = useAppSelector(state => state.filter.filterState)





    return(
        <div className={`${classes['row']} ${classes['gy-3']} ${classes['gx-3']}`}>
            {loading && <>Loading...</>}
            {
                products.filter(product => {
                    if (supportHTTPS) return product.supportHTTPS === true
                    return true

                })
                    .filter(product => {
                        if (supportCORS) return product.supportCORS === true
                        return true
                    })
                    .filter(product => {
                        if (category !== null) {
                            console.log(
                                'product.category:',product.category,
                                'category:',category,
                                category.includes(product.category)
                            )
                            return category.includes(product.category);
                        }
                        return true;
                    })
                    .filter(product => {
                        if (product.name.toLowerCase().includes(inputValue.toLowerCase())) {
                            return true
                        }
                        return false
                    })


                    .map((product: IProduct, _) => (
                    <div className={`${classes['col-xxl-6']} ${classes['col-lg-6']} ${classes['col-md-10']}
                         ${classes['col-15']}`}
                         key={product.id}>
                        <Product
                            product={product}
                        ></Product>
                    </div>


            ))}

        </div>
    )
}