import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm =() => {
    setIsSignInForm(!isSignInForm); 
  }

  return (
    <div><Header/>
    <div className='absolute'>
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt='background-img'/>
    </div>
    <form className='w-2/6 h-2/3 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80'>
      <hi className='font-bold text-3xl py-4'>{isSignInForm? "Sign In": "Sign Up"}</hi>
      {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 mt-8 w-full bg-gray-800 rounded-sm'/>}
      <input type='text' placeholder='Email Address' className='p-4 mt-4 w-full bg-gray-800 rounded-sm'/>
      <input type='password' placeholder='Password' className='p-4 mt-4 w-full bg-gray-800 rounded-sm'/>
      <button className='p-4 my-10 bg-red-600 w-full rounded-sm'>{isSignInForm? "Sign In": "Sign Up"}</button>
      <div className='py-10'>{isSignInForm? <div className='flex'> <p className='text-gray-400'>
      New to Netflix? 
      </p>
      <p className='px-1 cursor-pointer' onClick={toggleSignInForm}>Sign Up Now. </p></div>: <div className='flex'>
      <p className='text-gray-400'>
      Already a user? 
      </p>
      <p className='px-1 cursor-pointer' onClick={toggleSignInForm}>Sign In Now. </p></div>}
      </div>
    </form>
    </div>
  )
}

export default Login