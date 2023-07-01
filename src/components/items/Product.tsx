import { Link } from 'react-router-dom';
import { IProduct } from '../../types';
import { useCartContext } from '../../context';
import { FC } from "react";

type ProductProps = {
    product: IProduct;
}
const Product: FC<ProductProps> = ({ product }) => {
    const { addToCart, activeCart } = useCartContext();

    return (
        <li>
            <Link
                onClick={() => addToCart(activeCart, product.id, product.id, product.Item_Name)}
                to="#"
                className="active">
                {product.Item_Name}
            </Link>
        </li>
    )
}

export default Product;