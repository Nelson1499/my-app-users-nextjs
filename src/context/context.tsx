"use client";
import { getAllUsers } from "@/apis/api-users";
import { APIUserResponse } from "@/types/axiosTypes.d";
import {
  FilterValues,
  TaskProviderProps,
  UserContextType,
} from "@/types/types.d";
import { createContext, useState, useEffect } from "react";

/**
 * Contexto de usuario para almacenar valores de filtro y configuración.
 * @type {React.Context<UserContextType>}
 */
export const UserContext = createContext<UserContextType>({
  setfilterValues: () => {},
  filter: [],
  filterValues: {
    age: null,
    firstName: "Weber",
  },
});

export const UserProvider = ({ children }: TaskProviderProps) => {
    const [filterValues, setfilterValues] = useState<FilterValues>({
    age: 18,
    firstName: "",
  });
  const [filter, setfilter] = useState<APIUserResponse[]>([]);
  const [users, setusers] = useState<APIUserResponse[]>([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setusers(res);
      setfilter(res);
    });
  }, []);

  useEffect(() => {
    const MIN_EDAD = filterValues.age || 0;
    const NOMBRE_DESEADO = filterValues.firstName.trim().toLowerCase();
    /**
     * Filtrado de usuarios tanto de nombre como de edad.
     */
    const filtered = users.filter((user) => {
      const age = user.age || 0;
      const name = user.firstName || "";

      if (NOMBRE_DESEADO === "") {
        return age > MIN_EDAD;
      }

      const lowercaseName = name.toLowerCase();
      return age >= MIN_EDAD && lowercaseName.includes(NOMBRE_DESEADO);
    });

    setfilter(filtered);
  }, [filterValues, users]);

  return (
    <UserContext.Provider
      value={{
        setfilterValues,
        filter,
        filterValues,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
