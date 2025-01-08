import Link from "next/link";
import React from "react";

type Props = {};

const RegisterView = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="lg:w-[40%] md:w-[70%] w-full h-[50%] ">
        <h2 className="my-4 text-center">Register</h2>
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
          <div className="w-full ">
            <input
              type="password"
              placeholder="confirm password"
              className="p-2 outline-none border rounded w-full "
            />
          </div>
          <button className=" bg-gray-50 hover:bg-gray-100 duration-300 py-2 rounded">
            Register
          </button>
        </form>
        <hr />
        <div className="flex gap-2 w-full justify-center pt-2">
            <p>If have already register</p>
          <Link href="/auth/login" className="text-blue-300">LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
