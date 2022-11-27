import React from 'react';
import {Chat} from '../Chat';
import {BsPaperclip, BsCardImage} from 'react-icons/bs';

type InputProps = {
  //
};

export const Input = (props: InputProps) => {
  /** Property */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Enter text..."
        className="w-full p-3 outline-none"
      />
      <div className="flex items-center justify-between w-[9rem] px-2">
        <BsPaperclip />
        <input type="file" id="file" className="hidden" />
        <label htmlFor="file">
          <BsCardImage />
        </label>
        <button className="bg-sky-600 rounded-md px-2 py-1 text-white text-[12px]">
          Send
        </button>
      </div>
    </div>
  );
};
