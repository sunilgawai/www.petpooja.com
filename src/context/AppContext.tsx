import { createContext, useContext, useState, useEffect, ReactNode } from "react";


interface IAppContextProps {
    categories: never[]
    setCategories: React.Dispatch<React.SetStateAction<never[]>>
    products: never[]
    setProducts: React.Dispatch<React.SetStateAction<never[]>>
}

const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

const AppContextProvide = ({ children }: { children: ReactNode }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err))

        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
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

const useAppContext = () => useContext(AppContext);

export { AppContext, AppContextProvide, useAppContext };