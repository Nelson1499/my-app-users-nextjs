import { APIUserResponse } from "./axiosTypes.d";
import { ReactNode } from "react"

export interface FilterValues {
  age: number|null;
  firstName: string;
}

export interface UserContextType {
  setfilterValues: React.Dispatch<React.SetStateAction<FilterValues>>;
  filter: APIUserResponse[];
  filterValues: FilterValues;
}

export interface TaskProviderProps {
  children: ReactNode;
}