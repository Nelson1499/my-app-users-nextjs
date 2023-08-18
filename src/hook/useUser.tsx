"use client"
import { UserContext } from "@/context/context";
import { useContext } from "react";
import { UserContextType } from "@/types/types.d";

export const useUser = () => {
    /**
     * Obtener valores del contexto de usuario
     */
    const context = useContext<UserContextType>(UserContext);
  
    if (context === undefined) {
      throw new Error("useUser error");
    }
  
    return context;
  };