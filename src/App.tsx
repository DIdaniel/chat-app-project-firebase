import React from 'react';
import {Home, Login, Register} from './components/pages';

function App() {
  return (
    <div className=" flex justify-center items-center bg-cyan-200 h-screen">
      <div className="w-10/12 h-[30rem]" style={{border: '1px dashed red'}}>
        <Home />
      </div>
    </div>
  );
}

export default App;
