import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { ICartItem, ITable } from "../../types";
import { FC } from "react";
import { useCartContextOld } from "../../context";

type CartItemType = {
  item: ICartItem
}
const CartItem: FC<CartItemType> = ({ item }) => {
  const { activeCart, setCartTables } = useCartContextOld();

  const increaseItemtQty = (table_id: number, product_id: number) => {

    console.log(table_id, product_id);
    setCartTables((prev_tables) => {
      const updated_tables = [...prev_tables];
      let table = updated_tables.find(table => table.id === table_id);
      if (table === undefined) {
        table = {} as ITable;
      }

      const cart = table?.Cart;
      if (cart) {
        const products = cart.items.find((item) => item.item_id === product_id);
        if (products) {
          products.quantity += 1;
        }
      }
      console.log('product Quantity increased successfully', updated_tables);
      return updated_tables;
    })
  }

  const decreaseItemtQty = (table_id: number, product_id: number) => {

    console.log(table_id, product_id);
    setCartTables((prev_tables) => {
      const updated_tables = [...prev_tables];
      let table = updated_tables.find(table => table.id === table_id);
      if (table === undefined) {
        table = {} as ITable;
      }

      const cart = table?.Cart;
      if (cart) {
        const products = cart.items.find((item) => item.item_id === product_id);
        if (products) {
          products.quantity -= 1;
        }
      }
      console.log('product Quantity increased successfully', updated_tables);
      return updated_tables;
    })
  }

  return (
    <tr>
      <td>{item?.name}</td>
      <td>{item.item_id}</td>
      <td>
        <AiOutlineMinus onClick={() => decreaseItemtQty(activeCart, item.item_id)} />
        {item.quantity}
        <AiOutlinePlus onClick={() => increaseItemtQty(activeCart, item.item_id)} />
      </td>
      <td>{item.quantity}</td>
    </tr>
  )
}

export default CartItem;