import React from 'react';

type MessageProps = {
  user?: string;
  text: string;
};

export const Message = (props: MessageProps) => {
  /** Property */
  const {user, text, ...others} = props;

  /** Function */

  /** Render */
  return (
    <div
      {...others}
      className="flex items-end mb-10"
      style={{flexDirection: user ? 'row-reverse' : 'row'}}
    >
      <div
        className="flex flex-col justify-center"
        style={{margin: user ? '0 0 0 10px' : '0 10px 0 0'}}
      >
        <img
          src="https://cdn0.iconfinder.com/data/icons/dog-avatars/192/avatar-dog-saint-bernard-puppy-512.png"
          alt="dog"
          className="w-10 h-10"
        />
        <span className="text-gray-500 font-thin text-[13px] w-12">
          just now
        </span>
      </div>
      <div
        className="p-3 rounded-bl-lg rounded-tr-lg rounded-br-lg w-full"
        style={{backgroundColor: user ? '#8da4f1' : '#eaa000'}}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
