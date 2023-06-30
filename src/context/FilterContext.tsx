import { createContext, useEffect, ReactNode, useReducer } from "react";
import { IFilterState } from "./types";
import { useAppContext } from "./index";

const filterReducer = (state: IFilterState, action: any) => {

    switch (action.type) {
        case 'LOAD_FILTER_STATE': {
            const { categories, products } = action.payload;

            // console.log('payload in action.categories ', categories)
            // console.log('payload in action.products ', products)

            return {
                ...state,
                categories: [...categories],
                filtered_categories: [...categories],
                products: [...products],
                filtered_products: [...products]
            }
        }

        case 'UPDATE_FILTERS_VALUE': {

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
    setFilterCode(event) {
        //  TODO:
    },
    setFilterText(event) {
        // TODO
    },
}

const FilterContext = createContext<IFilterState>({} as IFilterState);

const FilterContextProvider = ({ children }: { children: ReactNode }) => {
    const { categories, products } = useAppContext();
    const [state, dispatchFilter] = useReducer(filterReducer, initFilterState);

    useEffect(() => {
        // Load filtered products.
        // console.log({ LOAD_FILTER_STATE: "LOAD_FILTER_STATE", categories, products })
        dispatchFilter({ type: 'LOAD_FILTER_STATE', payload: { categories, products } });
    }, [categories, products])

    useEffect(() => {
        // 
    }, [state.filters])

    // const setFiltersText = (event: any) => {
    //     / /
    // }
    // const setFiltersCode = (event: any) => {
    //     / /
    // }

    return <FilterContext.Provider value={{
        ...state
    }}>
        {children}
    </FilterContext.Provider>
}

export { FilterContext, FilterContextProvider };