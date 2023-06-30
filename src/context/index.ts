import { useContext } from 'react';
import { AppContext } from "./AppContext";
import { FilterContext } from './FilterContext';
import { IFilterState } from './types';

export const useAppContext = () => useContext(AppContext);
export const useFilterContext = () => useContext<IFilterState>(FilterContext);