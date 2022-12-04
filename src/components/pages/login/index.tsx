import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../firebase';

type LoginProps = {
  //
};

export const Login = (props: LoginProps) => {
  /** Porperty */
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  /** Function */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget[0] as HTMLInputElement).value;
    const password = (event.currentTarget[1] as HTMLInputElement).value;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/');
    } catch (err) {
      setError(true);
    }
  };
  /** Render */
  return (
    <div className="bg-white w-[25rem] h-[25rem] py-8 rounded-lg">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center">
          <p className="text-cyan-600 font-bold text-3xl">Chat App</p>
          <p className="mt-1">Login</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between h-[12rem] p-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border-b-2 border-gray-300 outline-none w-72 mb-5"
          />
          <input
            type="password"
            placeholder="******"
            className="p-2 border-b-2 border-gray-300 outline-none w-72 mb-5"
          />
          <button className="bg-blue-300 text-white rounded-md p-2">
            Sign up
          </button>
        </form>
        {error && <span>Somthing went wrong...</span>}
        <p className="text-gray-400 text-[13px] mt-2">
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};
