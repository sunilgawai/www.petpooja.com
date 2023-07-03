import { createContext, useState, ReactNode, useEffect } from "react";
import { ITable } from "../types";

interface ICartContextProps {
    cartTables: ITable[]
    setCartTables: React.Dispatch<React.SetStateAction<ITable[]>>
    activeTable: ITable
    setActiveTable: React.Dispatch<React.SetStateAction<ITable>>
    storeCart: (product_id: number, product_price: number, name: string) => void
    updateCart: (payment_method: string, payment_status?: string) => void
    updateCustomer: (customer_first_name: string, customer_last_name: string, customer_mobile: string) => void
    increaseQty: (id: number) => void
    decreaseQty: (id: number) => void
    removeFromCart: (id: number) => void
}

const CartContext = createContext<ICartContextProps>({} as ICartContextProps);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [tables, setTables] = useState<ITable[]>([]);
    const [cartTables, setCartTables] = useState<ITable[]>([]);
    const [activeTable, setActiveTable] = useState<ITable>(tables[0]);

    useEffect(() => {
        fetch('http://localhost:4000/api/cart')
            .then(res => res.json())
            .then(data => {
                console.log('Tables in CartContext', data);
                setTables(data);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setCartTables(tables);
        setActiveTable(tables[0]);
        console.log('active table from cart context', activeTable);
    }, [tables])

    useEffect(() => {
        // Needs to update this table to whole table array.
    }, [activeTable])

    const storeToDB = (table: ITable) => {
        console.log('storing to db', table)
        const { id, Cart } = table;
        if (!Cart) return;
        console.log('cart body', Cart.Cart_items)
        fetch('http://localhost:4000/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cart_table_id: id,
                customer_first_name: Cart.customer_first_name ? Cart.customer_first_name : 'unknown',
                customer_last_name: Cart.customer_last_name ? Cart.customer_last_name : 'unknown',
                customer_mobile: Cart.customer_mobile ? Cart.customer_mobile : 'unknown',
                payment_method: Cart.payment_method ? Cart.payment_method : 'CASH',
                payment_status: Cart.payment_status ? Cart.payment_status : '0',
                total_price: Cart.total_price,
                cart_items: Cart.Cart_items
            })
        }).then(res => res.json())
            .then(table => {
                console.log('updated table', table)
                setActiveTable(table);
            }).catch(err => console.log(err));
    };

    const storeCart = (product_id: number, product_price: number, name: string) => {
        // add items to active cart.
        console.log('adding to cart');
        const table = structuredClone(activeTable);
        console.log('Product Price', table.Cart, product_price)
        // If cart is available.
        if (table.Cart) {
            if (table.Cart.Cart_items) {
                const product = table.Cart.Cart_items.findIndex(item => item.itemmaster_id === product_id);
                if (product === -1) {
                    table.Cart.Cart_items.push({
                        itemmaster_id: product_id,
                        quantity: 1,
                        name: name
                    });
                    storeToDB(table);
                    return;
                }
                table.Cart.Cart_items[product].quantity += 1;
                table.Cart.Cart_items[product].name = name;
                console.log(`total cart price ${table.Cart.total_price}, product ${product}`)
                table.Cart.total_price += product_price;
                console.log("updated Table 😊", table.Cart)
                storeToDB(table);
            } else {
                table.Cart.Cart_items = [{
                    itemmaster_id: product_id,
                    quantity: 1,
                    name: name
                }];
                table.Cart.total_price += product_price;
                storeToDB(table);
            }
        }
        // if cart is empty.
        else {
            table.Cart = {
                customer_first_name: '',
                customer_last_name: '',
                customer_mobile: '',
                payment_method: '',
                payment_status: '',
                Cart_items: [{
                    itemmaster_id: product_id,
                    quantity: 1,
                    name: name
                }],
                total_price: product_price
            }
            storeToDB(table);
        }
        // Set active table.
        setActiveTable(table);
    }

    const updateCart = (payment_method: string, payment_status = '0') => {
        setCartTables((prev_tables) => {
            const updated_tables = [...prev_tables];
            const table = updated_tables.find(table => table.id === activeTable.id);
            const cart = table?.Cart;
            if (cart) {
                cart.payment_method = payment_method;
                cart.payment_status = payment_status;
            }
            return updated_tables;
        })
    }

    const updateCustomer = (customer_first_name: string, customer_last_name: string, customer_mobile: string) => {
        // Update active table with customer information.
        const table = structuredClone(activeTable);
        if (table.Cart) {
            table.Cart.customer_first_name = customer_first_name;
            table.Cart.customer_last_name = customer_last_name;
            table.Cart.customer_mobile = customer_mobile;
        } else {
            table.Cart = {
                customer_first_name: customer_first_name,
                customer_last_name: customer_last_name,
                customer_mobile: customer_mobile,
                payment_method: '',
                payment_status: '',
                Cart_items: [],
                total_price: 0
            }
        }
        setActiveTable(table);
    }

    const increaseQty = (id: number) => {
        // increase the quantity of the items.
        const table = structuredClone(activeTable);
        const cart = table?.Cart;
        if (cart) {
            const index = cart.Cart_items.findIndex(item => item.itemmaster_id === id);
            if (index !== -1) {
                cart.Cart_items[index].quantity += 1;
            }
            console.log("increase quantity", cart.Cart_items[index]);
        }
        setActiveTable(table);
        // storeToDB(table)
    }

    const removeFromCart = (id: number) => {
        console.log('id', id);
        // setCartTables(prevTables => {
        //     return prevTables.map(table => {
        //         if (table.id === activeTable.id) {
        //             const updatedCartItems = table.Cart.Cart_items.filter(item => item.id !== id);
        //             return {
        //                 ...table,
        //                 Cart: {
        //                     ...table.Cart,
        //                     Cart_items: updatedCartItems
        //                 }
        //             };
        //         }
        //         return table;
        //     });
        // })
        console.log('pre items', activeTable.Cart.Cart_items)
        const filtered = activeTable.Cart.Cart_items.filter((item) => item.itemmaster_id !== id)
        setActiveTable({
            ...activeTable,
            Cart: {
                ...activeTable.Cart,
                Cart_items: [...filtered]
            }
        })
        console.log('new items loaded', activeTable.Cart.Cart_items)
    }

    const decreaseQty = (id: number) => {
        // increase the quantity of the items.
        const table = structuredClone(activeTable);
        const cart = table?.Cart;
        if (cart) {
            const index = cart.Cart_items.findIndex(item => item.itemmaster_id === id);
            if (index !== -1) {
                if (cart.Cart_items[index].quantity > 1) {
                    cart.Cart_items[index].quantity -= 1;
                }
            }
            console.log("increase quantity", cart.Cart_items[index]);
        }
        setActiveTable(table);
        // storeToDB(table)
    }



    return <CartContext.Provider value={{
        cartTables,
        setCartTables,
        activeTable,
        setActiveTable,
        storeCart,
        updateCart,
        updateCustomer,
        increaseQty,
        decreaseQty,
        removeFromCart
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartContextProvider };