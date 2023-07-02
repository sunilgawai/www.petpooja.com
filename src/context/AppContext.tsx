import { createContext, useState, useEffect, ReactNode } from "react";
import { IAppContextProps } from "./types";
import { ICategory, IProduct } from "../types";

const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);

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
    }, [])

    // Return a table for cart operations.
    // const useTable = (id: number) => {
    //     console.log('table id', id);
    //     const table = tables.find(t => t.id === id);
    //     if (!table) return;
    //     setActiveTable(table);
    // }

    return <AppContext.Provider value={{
        categories,
        setCategories,
        products,
        setProducts,
    }}>
        {children}
    </AppContext.Provider>
}


export { AppContext, AppContextProvider };