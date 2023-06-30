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
                console.log(data)
                setCategories(data);
            })
            .catch(err => console.log(err))

        fetch('http://localhost:4000/api/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(err => console.log(err))
    }, [])

    return <AppContext.Provider value={{
        categories,
        setCategories,
        products,
        setProducts
    }}>
        {children}
    </AppContext.Provider>
}


export { AppContext, AppContextProvider };