import React, {useContext, useEffect, useState} from 'react';
import {doc, onSnapshot} from 'firebase/firestore';
import {ChatContext} from '../../../context';
import {db} from '../../../firebase';
import {Message} from '../Message';

type MessagesProps = {
  //
};

export const Messages = (props: MessagesProps) => {
  /** Property */
  const {...others} = props;

  const chatCtx = useContext(ChatContext);

  const [chatting, setChatting] = useState([]);

  useEffect(() => {
    if (chatCtx && chatCtx.state && chatCtx.state.chatId.length > 0) {
      const subscribe = onSnapshot(
        doc(db, 'chats', chatCtx.state.chatId),
        (doc: any) => {
          doc.exists() && setChatting(doc.data().messages);
        }
      );
      return () => {
        subscribe();
      };
    }
  }, [chatCtx]);

  /** Function */

  /** Render */
  return (
    <div
      {...others}
      className="w-full h-[32rem] bg-blue-100 px-5 py-2 overflow-y-scroll"
    >
      {chatting.map(chat => {
        const {id} = chat;
        return <Message chat={chat} key={id} />;
      })}
    </div>
  );
};
