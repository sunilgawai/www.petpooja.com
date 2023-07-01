import { createContext, useState, ReactNode, useEffect } from "react";
import { ITable } from "../types";
import { useAppContext } from ".";

interface ICartContextProps {
    cartTables: ITable[]
    setCartTables: React.Dispatch<React.SetStateAction<ITable[]>>
    activeTable: ITable
    setActiveTable: React.Dispatch<React.SetStateAction<ITable>>
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


    return <CartContext.Provider value={{
        cartTables,
        setCartTables,
        activeTable,
        setActiveTable
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartContextProvider };