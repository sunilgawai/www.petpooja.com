import { ICartItem } from "../../types";
import { FC } from "react";
import CartItem from "./CartItem";

type CartItemListProps = {
    items: ICartItem[]
}
const CartItemList: FC<CartItemListProps> = ({ items }) => {

    // const { } = useCartContext();
    return (
        <>
            {
                items.length
                    ? items.map(item => <CartItem item={item} key={item.item_id} />)
                    : null
            }
        </>
    )
}

export default CartItemList;