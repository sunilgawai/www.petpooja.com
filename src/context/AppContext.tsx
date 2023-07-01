import { createContext, useState, useEffect, ReactNode } from "react";
import { IAppContextProps } from "./types";
import { ICategory, IProduct, ITable } from "../types";

const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [cartTables, setCartTables] = useState<ITable[]>([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
            .catch(err => console.log(err))

        fetch('http://localhost:4000/api/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data[0])
                setProducts(data);
            })
            .catch(err => console.log(err))
        fetch('http://localhost:4000/api/cart')
            .then(res => res.json())
            .then(data => {
                console.log('tables from server', data);
                setCartTables(data);
                console.log(cartTables);
            })
            .catch(err => console.log(err))
    }, [])

    // Return a table for cart operations.
    // const useTable = (id: number) => {
    //     console.log('table id', id);
    //     const table = cartTables.find(t => t.id === id);
    //     if (!table) return;
    //     setActiveTable(table);
    // }

    return <AppContext.Provider value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartTables,
        setCartTables
    }}>
        {children}
    </AppContext.Provider>
}


export { AppContext, AppContextProvider };