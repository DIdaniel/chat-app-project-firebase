import {createContext, useContext, useReducer, type Dispatch} from 'react';
import {AuthContext} from './AuthContext';

// type ContextType = {
//   state: {
//     chatId: string;
//     user: {
//       displayName: string;
//       photoURL: string;
//       uid: string;
//     };
//   };
//   dispatch: React.Dispatch<{type: string; payload: any}>;
// };

export const ChatContext = createContext<any | null>(null);

export const ChatContextProvider = ({children}: any) => {
  /** Property */
  const currentUser = useContext(AuthContext);

  const INIT_STATE = {
    chatId: '',
    user: {
      displayName: '',
      photoURL: '',
      uid: ''
    }
  };

  /** Function */
  const chatReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'CHANGE_USER':
        return {
          user: action.payload,
          chatId:
            currentUser &&
            currentUser.uid &&
            currentUser?.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser?.uid
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INIT_STATE);

  /** Render */
  return (
    <ChatContext.Provider value={{state, dispatch}}>
      {children}
    </ChatContext.Provider>
  );
};
