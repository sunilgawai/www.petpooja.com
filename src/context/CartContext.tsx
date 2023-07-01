import { createContext, useState, ReactNode, useEffect } from "react";
import { ITable } from "../types";
import { useAppContext } from ".";

interface ICartContextProps {
    cartTables: ITable[]
    setCartTables: React.Dispatch<React.SetStateAction<ITable[]>>
    activeTable: ITable
    setActiveTable: React.Dispatch<React.SetStateAction<ITable>>
    addToCart: (product_id: number, product_price: number, name: string) => void
    updateCart: (payment_method: string, payment_status?: string) => void
    updateCustomer: (customer_first_name: string, customer_last_name: string, customer_mobile: string) => void
}

const CartContext = createContext<ICartContextProps>({} as ICartContextProps);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const { tables } = useAppContext();

    const [cartTables, setCartTables] = useState<ITable[]>([]);
    const [activeTable, setActiveTable] = useState<ITable>(tables[0]);

    useEffect(() => {
        // Setting cart tables to tables.
        setCartTables(tables);
    }, [tables])

    const addToCart = (product_id: number, product_price: number, name: string) => {
        // add items to active cart.
        const table = structuredClone(activeTable);
        // If cart is available.
        if (table.Cart) {
            const product = table.Cart.items.findIndex(item => item.item_id === product_id);
            if (product === -1) return;
            table.Cart.items[product].quantity += 1;
            table.Cart.items[product].name = name;
            table.Cart.total_price += product_price;
        }
        // if cart is empty.
        else {
            table.Cart = {
                customer_first_name: '',
                customer_last_name: '',
                customer_mobile: '',
                payment_method: '',
                payment_status: '',
                items: [
                    {
                        item_id: product_id,
                        quantity: 1,
                        name: name
                    }
                ],
                total_price: product_price
            }
        }
        // Set active table.
        setActiveTable(table);
    }

    const updateCart = (payment_method: string, payment_status = '0') => {
        console.log(payment_method, payment_status)
        setCartTables((prev_tables) => {
            const updated_tables = [...prev_tables];
            const table = updated_tables.find(table => table.id === activeTable.id);
            const cart = table?.Cart;
            if (cart) {
                cart.payment_method = payment_method;
                cart.payment_status = payment_status;
            }
            console.log('product Quantity increased successfully', updated_tables);
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
                items: [],
                total_price: 0
            }
        }
        setActiveTable(table);
    }



    return <CartContext.Provider value={{
        cartTables,
        setCartTables,
        activeTable,
        setActiveTable,
        addToCart,
        updateCart,
        updateCustomer
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartContextProvider };