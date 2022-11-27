import React from 'react';
import {Input, Sidebar} from '../../molecules';

type HomeProps = {
  //
};

export const Home = (props: HomeProps) => {
  /** Porperty */
  const {...others} = props;

  /** Function */

  /** Render */
  return (
    <div className="bg-blue-400 h-full w-full flex">
      <Sidebar />
      <Input />
    </div>
  );
};
