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
    <div className="w-full h-[23rem] bg-blue-100 px-5 py-2 overflow-scroll">
      <Message
        user={'bg-orange-300'}
        text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
      />
      <Message text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages" />
      <Message user={'bg-orange-300'} text="This is DONGDONG's chat app" />
      <Message text="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages" />
      <Message user={'bg-orange-300'} text="Nice to meet you!" />
      <Message text="I wanna drink some coffee" />
      <Message user={'bg-orange-300'} text="Hello world" />
    </div>
  );
};
