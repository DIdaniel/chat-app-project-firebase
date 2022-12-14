import React from 'react';
import {Chats} from '../Chats';
import {Navbar} from '../Navbar';
import {Search} from '../Search';

type SidebarProps = {
  //
};

export const Sidebar = (props: SidebarProps) => {
  /** Property */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="bg-cyan-700 w-80 h-full" {...others}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};
