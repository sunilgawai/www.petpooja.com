import { useEffect, useState } from "react";
import { useCartContext } from "../../context";
import { ICartItem } from "../../types";

const CartTable = () => {
    const { activeTable } = useCartContext();
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
                            <th scope="col">Item</th>
                            <th scope="col">code</th>
                            <th scope="col">QTY.</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (<tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity}</td>
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