import { FC, useEffect, useState } from "react";
import { useCartContext } from "../../context";
import { ITable } from "../../types";
import CartItemList from "./CartItemList";

const CartView: FC = () => {
    const { activeCart, cartT̥ables } = useCartContext();
    const [table, setTable] = useState<ITable>({} as ITable);

    useEffect(() => {
        const table_number = cartT̥ables.findIndex(table => table.id === activeCart);
        setTable(cartT̥ables[table_number])
        console.log('table', table);
    }, [activeCart, cartT̥ables])


    return (
        <div className="table-item-total">
            <div className="table-rasponsibe">
                <table className="table border table-bordered">
                    <thead className="">
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Check Items</th>
                            <th scope="col">QTY.</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table
                                ?
                                <>
                                    {
                                        table.Cart?.items
                                            ? <CartItemList items={table.Cart.items} />
                                            : null
                                    }
                                </>
                                :
                                <tr>
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

export default CartView;