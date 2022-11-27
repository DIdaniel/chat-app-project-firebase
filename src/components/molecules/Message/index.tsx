import React from 'react';

type MessageProps = {
  user?: string;
};

export const Message = (props: MessageProps) => {
  /** Property */
  const {user, ...others} = props;

  /** Function */

  /** Render */
  return (
    <div
      {...others}
      className="flex items-end mb-4"
      style={{flexDirection: user ? 'row-reverse' : 'row'}}
    >
      <div className="flex flex-col justify-center mr-3">
        <img
          src="https://cdn0.iconfinder.com/data/icons/dog-avatars/192/avatar-dog-saint-bernard-puppy-512.png"
          alt="dog"
          className="w-10 h-10"
        />
        <span className="text-gray-500 font-thin text-[13px]">just now</span>
      </div>
      <div
        className="p-2 rounded-bl-lg rounded-tr-lg rounded-br-lg"
        style={{backgroundColor: user ? '#8da4f1' : '#eaa000'}}
      >
        <p>hello world</p>
      </div>
      {/* <div> */}
      {/*   <p>Hello</p> */}
      {/*   <img */}
      {/*     src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png" */}
      {/*     alt="cat" */}
      {/*     className="w-10 h-10" */}
      {/*   /> */}
      {/* </div> */}
    </div>
  );
};
