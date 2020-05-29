import * as React from 'react'

import "./locker.scss";

const Locker = ({ switchRoute }) => {

   const handleLogin = () => {
      switchRoute("accounts")
   }

   return (
      <div className="w-1/2 h-80 bg-white mx-4 shadow">
         <div className="content w-10/12 mx-auto flex flex-col content-center">
            <div className="header flex justify-center my-2">
               <svg className="self-center" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8062 11.5101C11.2929 11.5101 10.8767 11.094 10.8767 10.5806V5.16771C10.8767 3.34338 9.39246 1.85912 7.56809 1.85912C5.74377 1.85912 4.25951 3.34334 4.25951 5.16771V8.31595C4.25951 8.82933 3.84333 9.24551 3.32995 9.24551C2.81657 9.24551 2.40039 8.82933 2.40039 8.31595V5.16771C2.40039 2.31821 4.7186 0 7.56809 0C10.4176 0 12.7358 2.31821 12.7358 5.16771V10.5806C12.7358 11.094 12.3196 11.5101 11.8062 11.5101Z" fill="#FFD469"/>
                  <path d="M13.2239 17.1392H1.91224C0.856143 17.1392 0 16.283 0 15.2269V8.68709C0 7.631 0.856143 6.77486 1.91224 6.77486H13.2239C14.28 6.77486 15.1362 7.631 15.1362 8.68709V15.2269C15.1362 16.283 14.28 17.1392 13.2239 17.1392Z" fill="#FFD469"/>
                  <path d="M1.65932 15.5981H1.56352C1.26177 15.5981 1.01717 15.3535 1.01717 15.0517V8.8623C1.01717 8.56056 1.26177 8.31595 1.56352 8.31595H1.65932C1.96107 8.31595 2.20567 8.56056 2.20567 8.8623V15.0517C2.20567 15.3535 1.96107 15.5981 1.65932 15.5981Z" fill="#FFD469"/>
               </svg>
               <p className="px-2 text-sm text-indigo-600">Login</p>
            </div>

            <div className="info pl-2 border-l-4 border-solid border-gray-300 my-2">
               <p className="text-indigo-600">Your passwords will be revealed once you're authenticated</p>
               <p className="text-indigo-600">Your login seession will only last for a maximum of 180s</p>
            </div>

            <div className="image w-12 mx-auto my-4">
               <img src="./images/user.png" alt=""/>
            </div>

            <div className="input-password mx-auto w-48 my-2">
               <input className="text-xs px-2 py-1 w-full outline-none border-2 border-solid border-gray-300 focus:border-indigo-300 rounded" type="password" name="key" id="key" />
               <label className="text-xs px-1 bg-white text-gray-400 inline-block transition-all duration-100" htmlFor="key">secret key</label>
            </div>

            <div className="button w-20 mx-auto">
               <button 
                  onClick={handleLogin}
                  className="rounded text-xs text-white w-full h-6 bg-blue-400 hover:bg-blue-500 focus:outline-none">
               Login
               </button>
            </div>
         </div>
      </div>
   )
}

export default Locker
