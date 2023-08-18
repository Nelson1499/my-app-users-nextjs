import React from "react";
import { APIUserResponse } from "@/types/axiosTypes.d";
import Image from "next/image";

interface UserListProps {
  userData: APIUserResponse;
}

const UserList: React.FC<UserListProps> = ({ userData }) => {
  return (
    <div className="bg-emerald-500 p-2 rounded flex  lg:w-72">
      <div className="justify-center items-center w-full">
        <div className="m-auto text-center ">
          <Image
            src={userData.image}
            className="h-36 w-36 m-auto"
            width={userData.weight}
            height={userData.height}
            alt={userData.maidenName}
            layout="responsive"
          />
          <p>Nombre: {userData.firstName}</p>
          <p>Apellido: {userData.lastName}</p>
          <p>Edad: {userData.age}</p>
          <p>Departamento: {userData.company.department}</p>

        </div>
      </div>
    </div>
  );
};

export default UserList;
