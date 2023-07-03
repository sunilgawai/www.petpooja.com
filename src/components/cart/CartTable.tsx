import { useEffect, useState } from "react";
import { useCartContext } from "../../context";
import { ICartItem } from "../../types";

const CartTable = () => {
    const { activeTable, increaseQty, decreaseQty, removeFromCart } = useCartContext();
    const [items, setItems] = useState<ICartItem[]>([]);

    useEffect(() => {
        if (!activeTable || !activeTable.Cart || !activeTable.Cart.Cart_items) return;
        setItems(activeTable.Cart.Cart_items)
    }, [activeTable])

    if (!activeTable || !activeTable.Cart || !activeTable.Cart.Cart_items) {
        return null;
    }

    return (
        <div className="table-item-total">
            <div className="table-rasponsibe">
                <table className="table border table-bordered">
                    <thead className="">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Item</th>
                            <th scope="col">code</th>
                            <th scope="col">QTY.</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, idx) => (<tr key={idx}>
                                <td>{idx + 1}</td>
                                <td><p className="h-6">{item.name}</p></td>
                                <td>{item.quantity}</td>

                                <td className="d-flex">
                                    <button 
                                    onClick={()=> increaseQty(item.itemmaster_id)}
                                    className="btn">+</button>
                                    {item.quantity}
                                    <button 
                                    onClick={()=> decreaseQty(item.itemmaster_id)}
                                    className="btn">-</button>
                                </td>

                                <td>{item.quantity}</td>
                                
                                <td>
                                    
                                    <button 
                                    onClick={()=> removeFromCart(item.itemmaster_id)}
                                    className="btn">Remove</button>
                                </td>
                            </tr>))
                        }
                        {
                            !items.length && <tr>
                                {/* <div className="no-item"> */}
                                <td colSpan={4}>
                                    <h6>No Item Selected</h6>
                                    <p>Please Select Item From Left Menu Item </p>
                                </td>
                                {/* </div> */}
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartTable;