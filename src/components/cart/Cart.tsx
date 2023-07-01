import CartController from "./CartController";
import CartView from "./CartView";
import Tables from "./Tables";
import { useState } from "react";
const Cart = () => {
   
    return (
        <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="dine-tab">
                <ul>
                    <Tables />
                    <li><img src="/public/img/dine-icon01.png" alt="" /></li>
                    <li><img src="/public/img/dine-icon02.png" alt="" /></li>
                    <li><img src="/public/img/dine-icon03.png" alt="" /></li>
                    <li><img src="/public/img/dine-icon04.png" alt="" /></li>
                </ul>
                <div className="dine-button"><a href="#" className="btn">Dine In</a></div>
            </div>
            {/* Model for Order place data  */}
            {/* <Model /> */}
            
            <CartView />
            <CartController />
        </div>
    )
}

export default Cart;