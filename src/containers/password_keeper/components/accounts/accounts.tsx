import * as React from 'react'

import Account from "../account/account";
import "./accounts.scss";

const Accounts = ({ switchRoute }) => {

   const handleLogout = () => {
      switchRoute("login")
   }

   return (
      <div className="accounts w-1/2 h-80 bg-white mx-4 shadow overflow-auto">
         <div className="header flex justify-between px-4 my-2">
         <svg onClick={handleLogout} className="h-5 w-5 mt-1 cursor-pointer stroke-current text-indigo-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
         </svg>
            <h1 className="text-lg text-indigo-500">credentials</h1>
            <svg className="h-4 w-4 mt-2 cursor-pointer" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10 6.11111V8.88889C10 9.18357 9.88294 9.46619 9.67456 9.67456C9.46619 9.88294 9.18357 10 8.88889 10H1.11111C0.816426 10 0.533811 9.88294 0.325437 9.67456C0.117063 9.46619 0 9.18357 0 8.88889V1.11111C0 0.816426 0.117063 0.533811 0.325437 0.325437C0.533811 0.117063 0.816426 0 1.11111 0H3.88889V1.11111H1.11111V8.88889H8.88889V6.11111H10Z" fill="#6682E3"/>
               <path d="M10 2.22222H7.77778V0H6.66667V2.22222H4.44444V3.33333H6.66667V5.55556H7.77778V3.33333H10" fill="#6682E3"/>
            </svg>
         </div>

         <div className="accounts-list pl-4">
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
         </div>
      </div>
   )
}

export default Accounts
