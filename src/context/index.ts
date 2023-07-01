import { useContext } from 'react';
import { AppContext } from "./AppContext";
import { FilterContext } from './FilterContext';
import { IFilterState } from './types';
import { CartContext } from './CartContextOld';
import { AuthContext } from './AuthContext';

export const useAppContext = () => useContext(AppContext);
export const useFilterContext = () => useContext<IFilterState>(FilterContext);
export const useCartContext = () => useContext(CartContext);
export const useAuthContex = () => useContext(AuthContext);