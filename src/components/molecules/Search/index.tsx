import React from 'react';

type SearchProps = {
  //
};

export const Search = (props: SearchProps) => {
  /** Property */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="border-b border-white p-2">
      <div className="mb-1">
        <input
          type="text"
          placeholder="Find a user"
          className="w-full bg-transparent px-2 py-1 outline-none placeholder:font-thin placeholder:text-gray-200 placeholder:text-[13px]"
        />
      </div>
      <div className="flex items-center">
        <img
          src={
            'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png'
          }
          alt="cat"
          className="w-8 h-8 mr-3"
        />
        <div className="">
          <p className="text-[13px] font-bold text-white">Cat</p>
          <p className="text-white font-thin text-[11px]">Text입니다</p>
        </div>
      </div>
    </div>
  );
};
