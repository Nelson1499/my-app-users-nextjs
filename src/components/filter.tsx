import React, { ChangeEvent } from 'react';
import { useUser } from "@/hook/useUser";
import { UserContextType } from "@/types/types.d";

const Filter = () => {
  /**
   * Contexto para acceder a los valores filtrados de la API
   */
  const { filterValues, setfilterValues }:UserContextType = useUser();

  /**
   * Función para filtrar usuarios por nombre
   * @param {string}  e - parámetro que viene del input text para filtrar nombre
   */
  const onchangeValue = (e : ChangeEvent<HTMLInputElement>) =>{
    const data = {
      ...filterValues,
      firstName: e.target.value
    }
    setfilterValues(data);
  } 

  return (
    <div className="md:flex justify-between m-2">
      <div className="border-2 border-emerald-500 p-2 text-white w-72 md:w-96 rounded">
        <input
          type="text"
          id="search"
          name="search"
          className="bg-transparent outline-none h-full w-full text-center"
          placeholder="Nombre"
          onChange={onchangeValue}
        />
      </div>
    </div>
  );
};

export default Filter;
