import { useState } from "react";

const CartController = () => {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(!open)} className={`${open ? 'open' : ''} bottom-select-menu`}>

            <div className="menu-total">
                <a href="#" className="btn">Spit</a>

                <div className="total-text">Total <span>0</span></div>
            </div>

            <div className="menu-radio">
                <label className="radio">
                    <input type="radio" id="radio1" name="radio1" value="RadioButton1" />
                    <span>Cash</span>
                </label>

                <label className="radio">
                    <input type="radio" id="radio2" name="radio1" value="RadioButton2" />
                    <span>Card</span>
                </label>
                <label className="radio">
                    <input type="radio" id="radio3" name="radio1" value="RadioButton3" />
                    <span>Due</span>
                </label>

                <label className="radio">
                    <input type="radio" id="radio4" name="radio1" value="RadioButton4" />
                    <span>Other</span>
                </label>
                <label className="radio">
                    <input type="radio" id="radio4" name="radio1" value="RadioButton5" />
                    <span>Part</span>
                </label>
            </div>


            <div className="menu-check-box">
                <label className="checkbox">
                    <input type="checkbox" id="radio4" name="radio1" value="RadioButton5" />
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