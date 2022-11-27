import React from 'react';

type NavbarProps = {
  //
};

export const Navbar = (props: NavbarProps) => {
  /** Property */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="bg-cyan-900 h-16 flex items-center justify-between px-1">
      <p className="text-white">App Chat</p>
      <div className="flex items-center justify-between w-[8rem]">
        <img
          src={
            'https://cdn0.iconfinder.com/data/icons/dog-avatars/192/avatar-dog-saint-bernard-puppy-512.png'
          }
          alt="dog"
          className="w-7 h-7"
        />
        <p className="text-[14px] text-white">Na-Na</p>
        <button className="bg-gray-600 text-white p-1 text-[12px] rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};
