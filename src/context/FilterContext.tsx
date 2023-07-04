import { createContext, useEffect, ReactNode, useReducer } from "react";
import { IFilterState } from "./types";
import { useAppContext } from "./index";

const filterReducer = (state: IFilterState, action: any) => {

    switch (action.type) {
        case 'LOAD_FILTER_STATE': {
            const { categories, products } = action.payload;
            return {
                ...state,
                categories: [...categories],
                filtered_categories: [...categories],
                products: [...products],
                filtered_products: [...products]
            }
        }

        case 'UPDATE_FILTERS_VALUE': {
            console.log('paylod', action.payload)
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }
        }

        case 'FILTER_BY_SEARCH': {
            const { categories } = state;
            let temp_categories = [...categories];
            const { name, code } = state.filters;

            if (name) {
                temp_categories = temp_categories.filter(category => {
                    return category.Category_Name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
                })
            }

            if (code) {
                temp_categories = temp_categories.filter(category => {
                    return category.Category_Code.toLocaleLowerCase().includes(code.toLocaleLowerCase());
                })
            }

            return {
                ...state,
                filtered_categories: temp_categories
            }
        }

        case 'FILTER_PRODUCTS_BY_CATEGORY': {
            // const temp_products = [...state.products];
            // 
            return {
                ...state
            }
        }


        default:
            return {
                ...state
            }
    }
}


const initFilterState: IFilterState = {
    isLoading: false,
    isError: false,
    categories: [],
    filtered_categories: [],
    products: [],
    filtered_products: [],
    filters: {
        name: '',
        code: ''
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function   
    setFilter: () => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setFilterByCategory: () => { }
}

const FilterContext = createContext<IFilterState>({} as IFilterState);

const FilterContextProvider = ({ children }: { children: ReactNode }) => {
    const { categories, products } = useAppContext();
    const [state, dispatchFilter] = useReducer(filterReducer, initFilterState);

    useEffect(() => {
        // Load filtered products.
        // console.log({ LOAD_FILTER_STATE: "LOAD_FILTER_STATE", categories, products })
        dispatchFilter({ type: 'LOAD_FILTER_STATE', payload: { categories, products } });
    }, [categories, products, state.filters])

    useEffect(() => {
        dispatchFilter({ type: 'FILTER_BY_SEARCH' })
    }, [state.filters])

    const setFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // console.log(name, value)
        return dispatchFilter({ type: 'UPDATE_FILTERS_VALUE', payload: { name, value } })
    }

    const setFilterByCategory = () => {
        console.log('setFilterByCategory');
        return dispatchFilter({ type: 'FILTER_PRODUCTS_BY_CATEGORY' });
    }

    return <FilterContext.Provider value={{
        ...state,
        setFilter: setFilter,
        setFilterByCategory: setFilterByCategory
    }}>
        {children}
    </FilterContext.Provider>
}

export { FilterContext, FilterContextProvider };