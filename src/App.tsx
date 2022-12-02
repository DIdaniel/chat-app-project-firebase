import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home, Login, Register} from './components/pages';

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-sky-200 px-12">
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
