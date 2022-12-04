import {signOut} from 'firebase/auth';
import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../context';
import {auth} from '../../../firebase';

type NavbarProps = {
  //
};

export const Navbar = (props: NavbarProps) => {
  /** Property */
  const {...others} = props;

  const navigate = useNavigate();

  const currentUser = useContext(AuthContext);

  /** Function */

  /** Render */
  return (
    <div
      {...others}
      className="bg-cyan-900 h-16 flex items-center justify-between px-2"
    >
      <p className="text-white">App Chat</p>
      <div className="flex items-center justify-between w-[7rem]">
        <img
          src={currentUser?.photoURL ?? ''}
          alt={currentUser?.displayName ?? ''}
          className="w-5 h-5"
        />
        <p className="text-[14px] text-white">
          {currentUser?.displayName ?? ''}
        </p>
        <button
          onClick={() => {
            signOut(auth);
            // navigate('/login');
          }}
          className="bg-gray-600 text-white p-1 text-[12px] rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
