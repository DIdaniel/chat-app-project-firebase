import React from 'react';
import {Home, Login, Register} from './components/pages';

function App() {
  return (
    <div className="flex justify-center items-center bg-sky-200 h-screen">
      <div className="w-11/12 h-[30rem]">
        <Home />
      </div>
    </div>
  );
}

export default App;
