import React, {useState} from 'react';
import {BsImage} from 'react-icons/bs';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth, storage} from '../../../firebase';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage';

type RegisterProps = {
  //
};

export const Register = (props: RegisterProps) => {
  /** Porperty */
  const {...others} = props;

  const [error, setError] = useState(false);

  /** Function */
  // React.FormEvent<HTMLFormElement>
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        error => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            });
          });
        }
      );
    } catch (err) {
      setError(true);
    }
  };

  /** Render */
  return (
    <div className=" bg-white w-[25rem] h-[30rem] py-8 rounded-lg">
      <div className="flex flex-col items-center justify-between h-full">
        <p className="text-cyan-600 font-bold text-3xl">Chat App</p>
        <p className="">Login</p>
        <form
          onSubmit={event => handleSubmit(event)}
          className="flex flex-col h-[20rem] p-2"
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 border-b-2 border-gray-300 outline-none w-72 mb-5"
          />
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
          <input
            id="file"
            type="file"
            className="border-b-2 border-gray-300 outline-none w-72 hidden"
          />
          <label
            htmlFor="file"
            className="flex items-center cursor-pointer"
            mt-2
          >
            <BsImage className="w-5 h-5 mr-2" />
            <p className="text-cyan-600 font-bold text-30">Add an avatar</p>
          </label>
          {error && <span>Somthing went wrong...</span>}
          <button
            type={'submit'}
            className="bg-blue-300 text-white rounded-md p-2 mt-10"
          >
            Sign up
          </button>
        </form>

        <p className="text-gray-400 text-[13px] mt-2">
          You do have an account? Login
        </p>
      </div>
    </div>
  );
};
