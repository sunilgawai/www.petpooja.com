import { Link } from 'react-router-dom';
import { IProduct } from '../types';
import { FC } from "react";

type ProductProps = {
    product: IProduct;
}
const Product: FC<ProductProps> = ({ product }) => {
    return (
        <li>
            <Link to="#" className="active">
                {product.Item_Name}
            </Link>
        </li>
    )
}

export default Product;