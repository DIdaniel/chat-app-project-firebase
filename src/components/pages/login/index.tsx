import React from 'react';

type LoginProps = {
  //
};

export const Login = (props: LoginProps) => {
  /** Porperty */

  /** Function */

  /** Render */
  return (
    <div className="bg-white w-[25rem] h-[20rem] py-8 rounded-lg">
      <div className="flex flex-col items-center justify-between h-full">
        <p className="text-cyan-600 font-bold text-3xl">Chat App</p>
        <p className="">Login</p>
        <form className="flex flex-col h-[20rem] p-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border-b-2 border-gray-300 outline-none w-72 mb-5"
          />
          <input
            type="password"
            placeholder="******"
            className="p-2 border-b-2 border-gray-300 outline-none w-72 mb-5"
          />
          <button className="bg-blue-300 text-white rounded-md p-2">
            Sign up
          </button>
        </form>
        <p className="text-gray-400 text-[13px] mt-2">
          You do have an account? Login
        </p>
      </div>
    </div>
  );
};
