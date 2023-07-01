import { ICart, ITable } from "../types";

class CartService {
    static BASE_URL = 'http://localhost:4000';

    static getCarts = async () => {
        // Getting all the Tables and their respective carts.
        const response = await fetch(`${this.BASE_URL}/api/cart`)
        if (response.status !== 200) {
            return [];
        }
        const tables = await response.json();
        const cartTables: ITable[] = tables as ITable[];

        return { cartTables };
    }

    static storeCartToDatabase = (cart: ICart, setCart:string) => {
        return;
        // fetch(`${this.BASE_URL}/api/cart`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(cart)
        // }).then((response) => response.json())
        // .then((tables) => {})
        // .catch((error)=> console.log(error));
        // return;
    };
}

export default CartService;