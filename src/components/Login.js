import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidationData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // validate the form fields
    const message = !isSignInForm
      ? checkValidationData({
          email: email.current.value,
          password: password.current.value,
          name: name.current.value,
        })
      : checkValidationData({
          email: email.current.value,
          password: password.current.value,
        });
    setErrorMessage(message);
    if (message) {
      return;
    }
    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-2/6 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 mt-8 w-full bg-gray-800 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 mt-4 w-full bg-gray-800 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mt-4 w-full bg-gray-800 rounded-sm"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-10 bg-red-600 w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-6">
          {isSignInForm ? (
            <div className="flex">
              <p className="text-gray-400">New to Netflix?</p>
              <p className="px-1 cursor-pointer" onClick={toggleSignInForm}>
                Sign Up Now.{" "}
              </p>
            </div>
          ) : (
            <div className="flex">
              <p className="text-gray-400">Already a user?</p>
              <p className="px-1 cursor-pointer" onClick={toggleSignInForm}>
                Sign In Now.{" "}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
