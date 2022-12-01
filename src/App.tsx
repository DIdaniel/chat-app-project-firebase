import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home, Login, Register} from './components/pages';

function App() {
  return (
    <div
      className="flex justify-center items-center h-screen w-full bg-sky-200"
      style={{border: '2px dashed red'}}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
