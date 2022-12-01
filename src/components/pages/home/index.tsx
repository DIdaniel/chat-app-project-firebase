import React from 'react';
import {Chat, Input, Sidebar} from '../../molecules';

type HomeProps = {
  //
};

export const Home = (props: HomeProps) => {
  /** Porperty */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <Chat />
    </div>
  );
};
