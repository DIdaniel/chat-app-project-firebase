import React from 'react';
import {Home, Login, Register} from './components/pages';

function App() {
  return (
    <div className="bg-sky-200 h-screen">
      <div className="w-11/12 h-screen flex justify-center items-center">
        <Register />
      </div>
    </div>
  );
}

export default App;
