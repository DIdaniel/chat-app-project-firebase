import React, {useContext, useEffect, useRef} from 'react';
import {AuthContext, ChatContext} from '../../../context';

type MessageProps = {
  user?: string;
  text?: string;
  chat?: any;
};

export const Message = (props: MessageProps) => {
  /** Property */
  const {user, text, chat, ...others} = props;

  const scrollRef = useRef<HTMLDivElement | any>();

  const currentUser = useContext(AuthContext);
  const chatCtx = useContext(ChatContext);

  /** Function */

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [chat]);

  useEffect(() => {
    console.log('chat >> ', chat);
    console.log('currentUser >> ', currentUser);
    console.log('chatCtx >> ', chatCtx.state);
  }, [chat, currentUser, chatCtx]);

  /** Render */
  return (
    <div
      ref={scrollRef}
      {...others}
      className="flex items-end mb-10"
      style={{
        flexDirection:
          chat.senderId === currentUser?.uid ? 'row-reverse' : 'row'
      }}
    >
      <div
        className="flex flex-col justify-center"
        style={{margin: user ? '0 0 0 10px' : '0 10px 0 0'}}
      >
        <img
          src={
            chat.senderId === currentUser?.uid
              ? currentUser?.photoURL
              : chatCtx.state.user.photoURL
          }
          alt={
            chat.senderId === currentUser?.uid
              ? currentUser?.displayName
              : chatCtx.state.user.displayName
          }
          className="w-10 h-10"
        />
        <span className="text-gray-500 font-thin text-[13px] w-12">
          just now
        </span>
      </div>
      <div
        className="p-3 rounded-bl-lg rounded-tr-lg rounded-br-lg w-full"
        style={{
          backgroundColor:
            chat.senderId === currentUser?.uid ? '#8da4f1' : '#eaa000'
        }}
      >
        <p>{chat.text}</p>
      </div>
    </div>
  );
};
