import { useContext } from 'react';
import { AppContext } from "./AppContext";
import { FilterContext } from './FilterContext';
import { IFilterState } from './types';
import { CartContextOld } from './CartContextOld';
import { AuthContext } from './AuthContext';
import { CartContext } from './CartContext';

export const useAppContext = () => useContext(AppContext);
export const useFilterContext = () => useContext<IFilterState>(FilterContext);
export const useCartContextOld = () => useContext(CartContextOld);
export const useAuthContex = () => useContext(AuthContext);
export const useCartContext = () => useContext(CartContext);