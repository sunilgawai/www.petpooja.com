import { createContext, ReactNode, useEffect, useState } from "react";
import { ICart, ITable } from "../types";
import { ICartContextProps } from "./types";
import { useAppContext } from ".";

const CartContext = createContext<ICartContextProps>({} as ICartContextProps);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const { cartTables } = useAppContext();

    const [cartT̥ables, setCartTables] = useState<ITable[]>([]);
    const [cart, setCart] = useState<ICart | null>(null);
    const [activeCart, setActiveCart] = useState(1); // Cart ID
    const [showOrderForm, setShowOrderForm] = useState(false);


    // New States.
    // const [tables, setTables] = useState<ITable[]>([]);


    useEffect(() => {
        // Setting the initial tables to CartContext State.
        // cartT̥ables(cartTables);
    }, [cartTables])

    useEffect(() => {
        fetch('http://localhost:4000/api/cart')
            .then(res => res.json())
            .then(cart_tables => {
                setCartTables(cart_tables);
                if (!cart_tables.length) {
                    console.log('No Table Found.');
                    return;
                }
                setActiveCart(cart_tables[0].id as number);
            })
            .catch(err => console.log(err))
    }, [])

    const addToCart = (table_id: number, product_id: number, product_price: number, name: string) => {
        console.log(table_id, product_id);
        setCartTables((prev_tables) => {
            const updated_tables = [...prev_tables];
            let table = updated_tables.find(table => table.id === table_id);
            if (table === undefined) {
                table = {} as ITable;
            }
            const cart = table?.Cart;
            if (cart) {
                const existingProduct = cart.items.find((item) => item.item_id === product_id);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                    cart.total_price += product_price;
                } else {
                    cart.items.push({
                        name: name,
                        item_id: product_id,
                        quantity: 1
                    })
                    cart.total_price += product_price;
                }
            } else {
                table.Cart = {
                    payment_method: "CASH",
                    payment_status: false,
                    items: [{
                        name: name,
                        item_id: product_id,
                        quantity: 1
                    }],
                    total_price: product_price,
                    customer_first_name: 'SUNIL',
                    customer_last_name: 'GAWAI',
                    customer_mobile: '7397973154'
                }
            }
            console.log('table updated successfully', updated_tables);
            return updated_tables;
        })
    }

    const updateCustomerDetails = (table_id: number, cutomer_first_name: string, cutomer_last_name: string, customer_mobile: string) => {
        console.log(table_id);
        setCartTables((prev_tables) => {
            const updated_tables = [...prev_tables];
            let table = updated_tables.find(table => table.id === table_id);
            if (table === undefined) {
                table = {} as ITable;
            }
            const cart = table?.Cart;
            if (cart) {
                cart.customer_first_name = cutomer_first_name;
                cart.customer_last_name = cutomer_last_name;
                cart.customer_mobile = customer_mobile
                console.log(cart)
            }
            console.log('customer details updated successfully', updated_tables);
            return updated_tables;
        })
    }



    // const save_cart_to_db = (table_id: number, cart: ICart) => {
    //     const cart_table = cartT̥ables.find(table => table.id === table_id);
    //     fetch('http://localhost:4000/api/cart', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             cart_table_name: cart_table?.cart_table_name,
    //             customer_id: 1,
    //             payment_method: 'CASH',
    //             payment_status: false
    //             // cart_items: [{ product_id: product_id, quantity: 1 }]
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))
    // }

    return <CartContext.Provider value={{
        cartT̥ables,
        setCartTables,
        cart,
        setCart,
        activeCart,
        setActiveCart,
        addToCart,
        showOrderForm,
        setShowOrderForm,
        updateCustomerDetails
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartContextProvider };