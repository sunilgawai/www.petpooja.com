import { ICartItem } from "../../types";
import { FC } from "react";

type CartItemType = {
  item: ICartItem
}
const CartItem: FC<CartItemType> = ({ item }) => {
  return (
    <tr>
      <td>{item?.name}</td>
      <td>{item.item_id}</td>
      <td>{item.quantity}</td>
      <td>{item.quantity}</td>
    </tr>
  )
}

export default CartItem;