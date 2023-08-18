"use client"
import Filter from "@/components/filter";
import SliderSizes from "@/components/slider";
import UserList from "@/components/userList";
import { APIUserResponse } from "@/types/axiosTypes.d";
import { useUser } from "@/hook/useUser";

const Home = (): JSX.Element => {
  const { filter } = useUser();
  return (
    <main className="flex flex-col items-center justify-center">
      <h1>Aplicación lista de usuarios</h1>
      <Filter />
      <div className="flex m-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {filter?.map((user: APIUserResponse, i: number) => (
            <UserList key={i} userData={user} />
          ))}
        </div>
        <SliderSizes />
      </div>
    </main>
  );
};
export default Home;
