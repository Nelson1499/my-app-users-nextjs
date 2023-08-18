"use client";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { useState } from "react";
import { useUser } from "@/hook/useUser";
import { UserContextType } from "@/types/types.d";

const SliderSizes = (): JSX.Element => {
  /**
   * Contexto para acceder a los valores filtrados de la API
   */
  const { filterValues, setfilterValues }:UserContextType = useUser();
  /**
   * Función para filtrar edad
   * @param {number} newValue - parámetro numerico que viene del Slider para filtrar la edad 
   */
  const handleEdadChange = (newValue: number) => {
    const data = {
      ...filterValues,
      age: newValue
    }
    setfilterValues(data);
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <div className="bg-black rounded px-2 mx-2">
        <div className="flex flex-col items-center text-center">
          <Box width={300}>
            <Slider
              defaultValue={18}
              aria-label="Default"
              valueLabelDisplay="auto"
              min={18}
              max={70}
              color="secondary"
              onChange={(e, newValue) => handleEdadChange(newValue as number)}
            />
            <span className="text-sm">Mayores de {filterValues.age}</span>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default SliderSizes;
