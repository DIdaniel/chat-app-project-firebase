import React, {createContext, useEffect, useState} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import {auth} from '../firebase';

export const AuthContext = createContext<User | null>(null);

export const AuthContextProvider = ({children}: any) => {
  /** Property */
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  /** Function */
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return () => {
      subscribe();
    };
  }, []);

  /** Render */
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
