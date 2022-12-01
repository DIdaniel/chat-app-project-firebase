import React from 'react';
import {Input} from '../Input';
import {BsFillCameraVideoFill} from 'react-icons/bs';
import {FaUserPlus} from 'react-icons/fa';
import {AiTwotoneSetting} from 'react-icons/ai';
import {Messages} from '../Messages';

type ChatProps = {
  //
};

export const Chat = (props: ChatProps) => {
  /** Property */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-sky-800 h-16 px-3">
        <span className="text-white font-bold">Na-Na</span>
        <div className="flex justify-between w-20">
          <button>
            <BsFillCameraVideoFill className="text-gray-200" />
          </button>
          <button>
            <FaUserPlus className="text-gray-200" />
          </button>
          <button>
            <AiTwotoneSetting className="text-gray-200" />
          </button>
        </div>
      </div>
      <div className="bg-white">
        <Messages />
        <Input />
      </div>
    </div>
  );
};
