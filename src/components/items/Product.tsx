import { Link } from 'react-router-dom';
import { IProduct } from '../../types';
import { useCartContext, useCartContextOld } from '../../context';
import { FC } from "react";

type ProductProps = {
    product: IProduct;
}
const Product: FC<ProductProps> = ({ product }) => {
    const { id, ItemRate_ID: { Item_Rate }, Item_Name } = product;
    // const { addToCart, activeCart } = useCartContextOld();
    const { storeCart } = useCartContext();

    return (
        <li>
            <Link
                onClick={(e) => {
                    e.preventDefault();
                    // addToCart(activeCart, product.id, product.id, product.Item_Name);
                    storeCart(id, Item_Rate, Item_Name)
                    console.log(id, Item_Name, Item_Rate)
                }}
                to="#"
                className="active">
                {product.Item_Name}
            </Link>
        </li>
    )
}

export default Product;