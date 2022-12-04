import React, {useContext, useState} from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore';
import {db} from '../../../firebase';
import {AuthContext} from '../../../context';

type UserType = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
};

type SearchProps = {
  //
};

export const Search = (props: SearchProps) => {
  /** Property */
  const {...others} = props;

  const currentUser = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState(false);

  /** Function */
  const handleSearch = async () => {
    const usersQury = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    );

    try {
      const querySnapshot = await getDocs(usersQury);
      querySnapshot.forEach((doc: any) => {
        setUser(doc?.data());
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handleSearch();
    }
  };

  const handleFindUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSelectUser = async () => {
    if (currentUser && user) {
      const combinedId =
        currentUser.uid > user.uid
          ? currentUser.uid + user.uid
          : user.uid + currentUser.uid;

      try {
        const res = await getDoc(doc(db, 'chats', combinedId));

        if (!res.exists()) {
          // create chat collection
          await setDoc(doc(db, 'chats', combinedId), {
            messages: []
          });

          // create user chat
          await updateDoc(doc(db, 'userChats', currentUser.uid), {
            [`${combinedId}.userInfo`]: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL
            },
            [`${combinedId}.date`]: serverTimestamp()
          });

          await updateDoc(doc(db, 'userChats', user.uid), {
            [`${combinedId}.userInfo`]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL
            },
            [`${combinedId}.date`]: serverTimestamp()
          });
        }
      } catch (err) {
        setUser(null);
        setUsername('');

        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1200);
      }
    }
  };

  /** Render */
  return (
    <div className="border-b border-white" {...others}>
      <div className="mb-1 py-2 px-1">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKeydown}
          onChange={handleFindUser}
          value={username ?? ''}
          className="w-full bg-transparent px-2 py-1 outline-none placeholder:font-thin placeholder:text-gray-200 placeholder:text-[13px]"
        />
      </div>
      {error && (
        <p className="text-[13px] text-center text-gray-400">
          User not found!...
        </p>
      )}
      {user && (
        <div
          className="flex items-center cursor-pointer p-2 hover:bg-cyan-900"
          onClick={handleSelectUser}
        >
          <img
            src={(user && user?.photoURL) || ''}
            alt={(user && user?.displayName) || ''}
            className="w-8 h-8 mr-3"
          />
          <div className="">
            <p className="text-[13px] font-bold text-white">
              {(user && user?.displayName) || ''}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
