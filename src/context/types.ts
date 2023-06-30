import { ICategory, IProduct } from "../types"


export interface IAppContextProps {
    categories: ICategory[]
    setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export interface IFilterContextProps {
    categories: ICategory[]
    setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export interface IFilterState {
    isLoading: boolean
    isError: boolean
    categories: ICategory[],
    filtered_categories: ICategory[],
    products: IProduct[],
    filtered_products: IProduct[],
    filters: {
        name: string,
        code: string
    },
    setFilterText: (event: Event) => void
    setFilterCode: (event: Event) => void
}