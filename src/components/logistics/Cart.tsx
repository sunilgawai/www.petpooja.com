import { FC, useEffect, useState } from "react";
import { useCartContext } from "../../context";
import CartItems from "./CartItems";
import { ITable } from "../../types";
import Tables from "./Tables";
import CartTable from "./CartTable";

const Cart = () => {
    const { cartTables, activeTable } = useCartContext();
    const [selectedTable, setSelectedTable] = useState<ITable>({} as ITable);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSelectedTable(activeTable)
    }, [activeTable])


    return (
        <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            {/* Navigation tabs for cart. */}
            <div className="dine-tab">
                <ul>
                    {/* list of cart tables  */}
                    {
                        cartTables ?
                            <Tables tables={cartTables} />
                            : <li>
                                <img
                                    className="w-50"
                                    src="/public/img/dine-table.png"
                                    alt="" />
                            </li>
                    }

                    {/* <li><img src="/public/img/dine-icon01.png" alt="" /></li> */}
                    <li>
                        <img data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            src="/public/img/dine-icon02.png" alt="" />
                    </li>
                    <li><img src="/public/img/dine-icon03.png" alt="" /></li>
                    <li><img src="/public/img/dine-icon04.png" alt="" /></li>
                </ul>
                <div className="dine-button"><a href="#" className="btn">Dine In</a></div>
            </div>

            {/* <CartView /> */}
            {/* this will receive a table. */}
            <CartTable />
            <CartItems table={selectedTable} />


            {/* <CartController /> */}
            <div onClick={() => setOpen(!open)} className={`${open ? 'open' : ''} bottom-select-menu`}>

                <div className="menu-total">
                    <a href="#" className="btn">Spit</a>

                    <div className="total-text">Total <span>{0}</span></div>
                </div>

                <div className="menu-radio">
                    <label className="radio">
                        <input type="radio"
                            id="CASH"
                            name="payment_method"
                            value="CASH"
                        // onChange={(e) => update_cart(e.target.value, '0')} 
                        />
                        <span>Cash</span>
                    </label>

                    <label className="radio">
                        <input type="radio"
                            id="CARD"
                            name="payment_method"
                            value="CARD"
                        // onChange={(e) => update_cart(e.target.value, '0')} 
                        />
                        <span>Card</span>
                    </label>
                    <label className="radio">
                        <input type="radio"
                            id="DUE"
                            name="payment_method"
                            value="DUE"
                        // onChange={(e) => update_cart(e.target.value, '0')} 
                        />
                        <span>Due</span>
                    </label>

                    <label className="radio">
                        <input type="radio"
                            id="OTHER"
                            name="payment_method"
                            value="OTHER"
                        // onChange={(e) => update_cart(e.target.value, '0')} 
                        />
                        <span>Other</span>
                    </label>
                    <label className="radio">
                        <input type="radio"
                            id="PART"
                            name="payment_method"
                            value="PART"
                        // onChange={(e) => update_cart(e.target.value, '0')} 
                        />
                        <span>Part</span>
                    </label>
                </div>

                <div className="menu-check-box">
                    <label className="checkbox">
                        {/* <button type="button" className="btn btn-primary mb-2" data-mdb-toggle="modal" data-mdb-target="#exampleCentralModal2" style={{}}>
                        Medium
                    </button> */}
                        <input
                            type="checkbox"
                            id="radpayment_statusio4"
                            name="payment_status"
                            value="payment_status"
                        // onChange={() => place_order()} 
                        />
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
        </div>
    )
}

export default Cart;

