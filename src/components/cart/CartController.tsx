import { useEffect, useState } from "react";
import { useCartContext } from "../../context";
import { ITable } from "../../types";

const CartController = () => {
    const [open, setOpen] = useState(false);
    const { activeCart, cartT̥ables, setCartTables } = useCartContext();
    const [table, setTable] = useState<ITable>({} as ITable);

    useEffect(() => {
        const table_number = cartT̥ables.findIndex(table => table.id === activeCart);
        setTable(cartT̥ables[table_number])
        console.log('table', table?.Cart);
    }, [activeCart, cartT̥ables])

    const update_cart = (payment_method: string, payment_status = false) => {
        console.log(payment_method, payment_status)
        setCartTables((prev_tables) => {
            const updated_tables = [...prev_tables];
            const table = updated_tables.find(table => table.id === activeCart);
            const cart = table?.Cart;
            if (cart) {
                cart.payment_method = payment_method;
                cart.payment_status = payment_status;
            }
            console.log('product Quantity increased successfully', updated_tables);
            return updated_tables;
        })
    }

    const place_order = () => {
        // Place order.
        fetch('http://localhost:4000/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shop_code: 'XXXX',
                customer_first_name: table.Cart?.customer_first_name,
                customer_last_name: table.Cart?.customer_last_name,
                customer_mobile: table.Cart?.customer_mobile,
                order_price: JSON.stringify(table.Cart?.total_price),
                payment_method: table.Cart?.payment_method,
                payment_status: table.Cart?.payment_status ? '1' : '0',
                order_items: table.Cart?.items
            })
        }).then((response) => response.json())
            .then(order => console.log(order))
            .catch((error) => console.log(error))
    }

    return (
        <div onClick={() => setOpen(!open)} className={`${open ? 'open' : ''} bottom-select-menu`}>

            <div className="menu-total">
                <a href="#" className="btn">Spit</a>

                <div className="total-text">Total <span>{table.Cart?.total_price}</span></div>
            </div>

            <div className="menu-radio">
                <label className="radio">
                    <input type="radio"
                        id="CASH"
                        name="payment_method"
                        value="CASH"
                        onChange={(e) => update_cart(e.target.value, false)} />
                    <span>Cash</span>
                </label>

                <label className="radio">
                    <input type="radio"
                        id="CARD"
                        name="payment_method"
                        value="CARD"
                        onChange={(e) => update_cart(e.target.value, false)} />
                    <span>Card</span>
                </label>
                <label className="radio">
                    <input type="radio"
                        id="DUE"
                        name="payment_method"
                        value="DUE"
                        onChange={(e) => update_cart(e.target.value, false)} />
                    <span>Due</span>
                </label>

                <label className="radio">
                    <input type="radio"
                        id="OTHER"
                        name="payment_method"
                        value="OTHER"
                        onChange={(e) => update_cart(e.target.value, false)} />
                    <span>Other</span>
                </label>
                <label className="radio">
                    <input type="radio"
                        id="PART"
                        name="payment_method"
                        value="PART"
                        onChange={(e) => update_cart(e.target.value, false)} />
                    <span>Part</span>
                </label>
            </div>

            <div className="menu-check-box">
                <label className="checkbox">
                    {/* <button type="button" className="btn btn-primary mb-2" data-mdb-toggle="modal" data-mdb-target="#exampleCentralModal2" style={{}}>
                        Medium
                    </button> */}
                    <input data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        type="checkbox"
                        id="radpayment_statusio4"
                        name="payment_status"
                        value="payment_status"
                        onChange={() => place_order()} />
                    <span>It's Paid</span>
                </label>
            </div>


            <div className="menu-button">
                <a href="#" className="btn gray-color mx-2">Save Print</a>
                <a href="#" className="btn gray-color mx-2">Save &eBill</a>
                <a href="#" className="btn gray-color mx-2">KOT & Print </a>
                <a href="#" className="btn gray-color mx-2">Hold</a>
            </div>
        </div>
    )
}

export default CartController;