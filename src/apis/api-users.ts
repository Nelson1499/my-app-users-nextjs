import { APIUserResponse } from "@/types/axiosTypes.d";
import axios from "axios"

export const getAllUsers = async () => {
    /**
    * Obtiene datos de usuarios de la API https://dummyjson.com/.
    * @returns {Promise<APIUserResponse[]>} - Array de usuarios obtenidos de la API.
    */
    const response = await axios.get("https://dummyjson.com/users")
    return response.data.users as APIUserResponse[];
}