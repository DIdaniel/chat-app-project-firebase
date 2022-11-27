import React from 'react';

type ChatsProps = {
  //
};

export const Chats = (props: ChatsProps) => {
  /** Property */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="p-2">
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
