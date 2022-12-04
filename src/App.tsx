import React, {useContext} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Home, Login, Register} from './components/pages';
import {AuthContext} from './context';

const App: React.FC = () => {
  /** Property */
  const currentUser = useContext(AuthContext);

  const ProtectedRoute: any = ({children}: any) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  /** Render */
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-sky-200 px-12">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
