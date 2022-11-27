import React from 'react';
import {Message} from '../Message';

type MessagesProps = {
  //
};

export const Messages = (props: MessagesProps) => {
  /** Property */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="w-full h-[23rem] bg-blue-100 p-2 overflow-scroll">
      <Message user={'bg-orange-300'} />
      <Message />
      <Message user={'bg-orange-300'} />
      <Message />
      <Message user={'bg-orange-300'} />
      <Message />
      <Message user={'bg-orange-300'} />
    </div>
  );
};
