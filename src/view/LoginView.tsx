import Link from "next/link";
import React from "react";

type Props = {};

const LoginView = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-[50%] h-[50%] ">
        <div className=" w-full ">
          <h2 className="my-4 text-center">LogIn</h2>
          <form className="w-full md:p-14 p-5 flex flex-col gap-8">
            <div className="w-full ">
              <input
                type="text"
                placeholder="email"
                className="p-2 outline-none border rounded w-full "
              />
            </div>
            <div className="w-full ">
              <input
                type="password"
                placeholder="password"
                className="p-2 outline-none border rounded w-full "
              />
            </div>
            <button className=" bg-gray-50 hover:bg-gray-100 duration-300 py-2 rounded">
              LogIn
            </button>
          </form>
        </div>
        <hr/>
        <div className="flex gap-2 w-full justify-center pt-2">
            <p>If hav'nt register already </p>
            <Link href="/auth/register" className="text-blue-300">Register</Link>
        </div>
       
      </div>
    </div>
  );
};

export default LoginView;
