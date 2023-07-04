import { createContext, useState, ReactNode, useEffect } from "react";
import { ICartItem, ITable } from "../types";

interface ICartContextProps {
    cartTables: ITable[]
    setCartTables: React.Dispatch<React.SetStateAction<ITable[]>>
    activeTable: ITable
    setActiveTable: React.Dispatch<React.SetStateAction<ITable>>
    storeCart: (product_id: number, product_price: number, name: string) => void
    increaseQty: (id: number) => void
    decreaseQty: (id: number) => void
    increaseQuantity: (product_id: number) => void
    decreaseQuantity: (product_id: number) => void
    removeFromCart: (id: number) => void
}

const CartContext = createContext<ICartContextProps>({} as ICartContextProps);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartTables, setCartTables] = useState<ITable[]>([]);
    const [activeTable, setActiveTable] = useState<ITable>({} as ITable);

    useEffect(() => {
        console.log('fetching carts')
        fetch('http://localhost:4000/api/cart')
            .then(res => res.json())
            .then(data => {
                setCartTables(data);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        // setCartTables(tables);
        setActiveTable(cartTables[0]);
        console.log("Cart Tables changed", { cartTables, activeTable })
    }, [cartTables])

    useEffect(() => {
        // We need to store it on server.
    }, [activeTable])


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

    // Needs to check if it works properly.
    // const removeFromCart = (id: number) => {
    //     console.log('id', id);
    //     // setCartTables(prevTables => {
    //     //     return prevTables.map(table => {
    //     //         if (table.id === activeTable.id) {
    //     //             const updatedCartItems = table.Cart.Cart_items.filter(item => item.id !== id);
    //     //             return {
    //     //                 ...table,
    //     //                 Cart: {
    //     //                     ...table.Cart,
    //     //                     Cart_items: updatedCartItems
    //     //                 }
    //     //             };
    //     //         }
    //     //         return table;
    //     //     });
    //     // })
    //     console.log('pre items', activeTable.Cart.Cart_items)
    //     const filtered = activeTable.Cart.Cart_items.filter((item) => item.itemmaster_id !== id)
    //     setActiveTable({
    //         ...activeTable,
    //         Cart: {
    //             ...activeTable.Cart,
    //             Cart_items: [...filtered]
    //         }
    //     })
    //     console.log('new items loaded', activeTable.Cart.Cart_items)
    // }

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

    const storeCart = (product_id: number, product_price: number, name: string) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                let updatedCartItems: ICartItem[] = [];
                if (table.id === activeTable.id) {
                    let isItemUpdated = false;
                    if (table.Cart?.Cart_items) {
                        updatedCartItems = table.Cart?.Cart_items?.map((item) => {
                            if (item.itemmaster_id === product_id) {
                                isItemUpdated = true;
                                return {
                                    ...item,
                                    quantity: item.quantity + 1,
                                };
                            }
                            return item;
                        });
                    }

                    if (!isItemUpdated) {
                        updatedCartItems.push({
                            itemmaster_id: product_id,
                            quantity: 1,
                            name: name,
                            product_price: product_price
                        });
                    }

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                            total_price: product_price
                        },
                    };
                }
                return table;
            });
        });
        
    }

    const increaseQuantity = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    const updatedCartItems: ICartItem[] = table.Cart?.Cart_items?.map((item) => {
                        if (item.itemmaster_id === product_id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        }
                        return item;
                    });

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                        },
                    };
                }
                return table;
            });
        });
    };

    const decreaseQuantity = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    const updatedCartItems: ICartItem[] = table.Cart?.Cart_items?.map((item) => {
                        if (item.itemmaster_id === product_id && item.quantity > 0) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        }
                        return item;
                    });

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                        },
                    };
                }
                return table;
            });
        });
    };

    const removeFromCart = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    const updatedCartItems: ICartItem[] = table.Cart?.Cart_items?.filter((item) => item.itemmaster_id !== product_id);

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                        },
                    };
                }
                return table;
            });
        });
    };


    return <CartContext.Provider value={{
        cartTables,
        setCartTables,
        activeTable,
        setActiveTable,
        increaseQty,
        decreaseQty,
        removeFromCart,
        storeCart,
        increaseQuantity,
        decreaseQuantity
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartContextProvider };