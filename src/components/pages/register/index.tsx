import React from 'react';

type RegisterProps = {
  //
};

export const Register = (props: RegisterProps) => {
  /** Porperty */

  /** Function */

  /** Render */
  return (
    <div className=" bg-white w-[25rem] h-[30rem] py-8 rounded-lg">
      <div className="flex flex-col items-center justify-between h-full">
        <p className="text-cyan-600 font-bold text-3xl">Chat App</p>
        <p className="">Login</p>
        <form className="flex flex-col h-[20rem] p-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 border-b-2 border-gray-300 outline-none w-72 mb-5"
          />
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
          <input
            id="file"
            type="file"
            className="border-b-2 border-gray-300 outline-none w-72 hidden"
          />
          <label htmlFor="file" className="flex items-end cursor-pointer" mt-2>
            <img
              src={
                'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/512/external-file-multimedia-kiranshastry-lineal-color-kiranshastry-3.png'
              }
              alt="file"
              className="w-7 h-7 mr-2"
            />
            <p className="text-cyan-600 font-bold text-30">Add an avatar</p>
          </label>
          <button className="bg-blue-300 text-white rounded-md p-2 mt-10">
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
