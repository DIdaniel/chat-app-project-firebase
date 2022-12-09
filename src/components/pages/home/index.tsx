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
    <div
      {...others}
      className="w-full h-[40rem] flex items-center"
      style={{border: '1px dashed red'}}
    >
      <Sidebar />
      <Chat />
    </div>
  );
};
