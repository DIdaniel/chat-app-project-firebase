import React, {useContext, useState} from 'react';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc
} from 'firebase/firestore';
import {BsPaperclip, BsCardImage} from 'react-icons/bs';
import {v4 as uuid} from 'uuid';

import {Chat} from '../Chat';
import {AuthContext, ChatContext} from '../../../context';
import {db, storage} from '../../../firebase';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';

type InputProps = {
  //
};

export const Input = (props: InputProps) => {
  /** Property */
  const {...others} = props;

  const currentUser = useContext(AuthContext);
  const chatCtx = useContext(ChatContext);

  const [text, setText] = useState('');
  const [image, setImage] = useState<any | null>(null);

  /** Function */
  const handleSendInfo = async () => {
    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        snapshot => {},
        (error: any) => {
          //
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
            await updateDoc(doc(db, 'chats', chatCtx.state.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser?.uid,
                date: Timestamp.now(),
                image: downloadURL
              })
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, 'chats', chatCtx.state.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser?.uid,
          date: Timestamp.now()
        })
      });
    }

    if (currentUser && currentUser.uid) {
      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [`${chatCtx.state.chatId}.lastMessage`]: {
          text
        },
        [`${chatCtx.state.chatId}.date`]: serverTimestamp()
      });

      await updateDoc(doc(db, 'userChats', chatCtx.state.user.uid), {
        [`${chatCtx.state.chatId}.lastMessage`]: {
          text
        },
        [`${chatCtx.state.chatId}.date`]: serverTimestamp()
      });
    }

    setText('');
    setImage(null);
  };

  /** Render */
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Enter text..."
        onChange={e => setText(e.target.value)}
        value={text}
        className="w-full p-3 outline-none"
      />
      <div className="flex items-center justify-between w-[9rem] px-2">
        <BsPaperclip />
        <input
          type="file"
          id="file"
          className="hidden"
          onChange={e => {
            if (e.target.files) {
              setImage(e.target.files[0]);
            }
          }}
        />
        <label htmlFor="file">
          <BsCardImage />
        </label>
        <button
          onClick={handleSendInfo}
          className="bg-sky-600 rounded-md px-2 py-1 text-white text-[12px]"
        >
          Send
        </button>
      </div>
    </div>
  );
};
