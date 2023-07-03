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

    static storeCartToDatabase = (cart: ICart, setCart: string) => {
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

    static emptyCart = (id: number) => {
        try {
            fetch(`${this.BASE_URL}/api/cart/:{id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status !== 200) {
                    return false;
                }
            }).then(response => {
                console.log('Cart Deleted', response)
            }).catch(error => {
                console.log('error', error)
            })
        } catch (error) {
            return null;
        }
    }
}

export default CartService;