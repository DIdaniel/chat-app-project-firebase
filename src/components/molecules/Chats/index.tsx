import React, {useContext, useEffect, useState} from 'react';
import {doc, onSnapshot} from 'firebase/firestore';
import {AuthContext, ChatContext} from '../../../context';
import {db} from '../../../firebase';

type ChatType = {
  date: any;
  userInfo: {
    displayName: string;
    photoURL: string;
    uid: string;
  };
};

type ChatsProps = {
  //
};

export const Chats = (props: ChatsProps) => {
  /** Property */
  const {...others} = props;

  const currentUser = useContext(AuthContext);
  const chatCtx = useContext(ChatContext);

  const [chats, setChats] = useState([]);

  const handleSelect = (user: any) => {
    if (user) {
      chatCtx?.dispatch({type: 'CHANGE_USER', payload: user});
    }
  };

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      const subscribe = onSnapshot(
        doc(db, 'userChats', currentUser.uid),
        (doc: any) => {
          setChats(doc.data());
        }
      );

      return () => {
        subscribe();
      };
    }
  }, [currentUser?.uid]);

  /** Function */

  /** Render */
  return (
    <div className="cursor-pointer" {...others}>
      {Object.entries(chats) &&
        Object.entries(chats)
          ?.sort((a: any, b: any): any => b[1]?.date - a[1]?.date)
          ?.map((chat: any) => {
            const {userInfo, lastMessage} = chat[1];
            return (
              <div
                className="flex items-center hover:bg-cyan-800 p-2"
                key={chat[0]}
                onClick={() => handleSelect(userInfo)}
              >
                <img
                  src={userInfo.photoURL ?? ''}
                  alt="cat"
                  className="w-8 h-8 mr-3"
                />
                <div className="">
                  <p className="text-[13px] font-bold text-white">
                    {userInfo?.displayName ?? ''}
                  </p>
                  <p className="text-white font-thin text-[11px]">
                    {lastMessage?.text ?? ''}
                  </p>
                </div>
              </div>
            );
          })}
    </div>
  );
};
