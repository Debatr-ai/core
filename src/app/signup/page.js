/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client"
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Divider } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Signup() {

    const {data: session} = useSession()
    const {push} = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    if(session){
      push('/home')
    }

   
   
   
        return (
            <>
              {/*
                This example requires updating your template:
        
                ```
                <html className="h-full bg-white">
                <body className="h-full">
                ```
              */}
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <img
                    className="mx-auto h-20 w-auto"
                    src="/logo.svg"
                    alt="Your Company"
                  />
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                  </h2>
                </div>
                
        
                <div className="mt-10 sm:mx-auto sm:w-1/2 sm:max-w-sm">
                  {/* <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={(e)=>setUsername(e.target.value)}
                          value={username}
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
        
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Password
                        </label>
                        <div className="text-sm">
                          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onChange={(e)=>setPassword(e.target.value)}
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
        
                    <div>
                      <button
                        type="submit"
                        className="flex mb-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  <Divider >
                    <div class="text-gray-600">
                      Or
                    </div>
                  </Divider> */}
                  <btn onClick={()=>{
                  signIn('google', {callbackUrl: 'http://localhost:3000/home'})}} 
                  class="flex gap-3 cursor-pointer mt-5 w-full justify-center items-center rounded-md border-indigo-600 border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  <img class="w-5 m-2" src="/google.svg"/>
                  <p className="text-gray-600 hover:text-white">
                    Sign in with Google
                  </p>
                  </btn>
        
                  {/* <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Start a 14 day free trial
                    </a>
                  </p> */}
                </div>
               
              </div>
            </>
          )

    
  
       

    }

  
  

