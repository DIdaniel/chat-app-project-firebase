import React from 'react';

type LoginProps = {
  //
};

export const Login = (props: LoginProps) => {
  /** Porperty */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div
      className="flex items-center justify-center bg-white w-[25rem] h-[27rem] py-8 rounded-lg"
      {...others}
    >
      <div className="flex flex-col items-center justify-between h-full w-full">
        <div className="flex flex-col items-center">
          <p className="text-cyan-600 font-bold text-3xl">Chat App</p>
          <p className="">Login</p>
        </div>
        <form className="flex flex-col p-2 w-80 ">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border-b-2 border-gray-300 outline-none w-full mb-5"
          />
          <input
            type="password"
            placeholder="******"
            className="p-2 border-b-2 border-gray-300 outline-none w-full mb-5"
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
