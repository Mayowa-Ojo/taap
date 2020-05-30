import * as React from 'react';

import "./form.scss";

const Form = ({ formOpen, setFormOpen }) => {
   return (
      <form className={`bg-white absolute z-10 shadow ${!formOpen ? "open" : ""}`}>
         <div className="my-2 px-2 flex justify-between">
            <span></span>
            <h1 className="text-md text-blue-400 text-center">Create a new locker</h1>
            <span onClick={() => setFormOpen(!formOpen)} className="pt-1 cursor-pointer inline-block w-5 h-5">
               <svg className="w-4 h-4 stroke-current text-red-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
               </svg>
            </span>
         </div>
         <div className="input w-48 h-8 mx-auto mb-3">
            <input className="w-full px-2 py-1 text-xs border-2 border-gray-300 focus:border-blue-400 rounded appearance-none outline-none" type="text" name="account" />
            <label className="text-xs px-1 bg-white text-gray-400 inline-block transition-all duration-100 pointer-events-none" htmlFor="account">Account</label>
         </div>
         <div className="input w-48 h-8 mx-auto mb-3">
            <input className="w-full px-2 py-1 text-xs border-2 border-gray-300 focus:border-blue-400 rounded appearance-none outline-none" type="text" name="username" />
            <label className="text-xs px-1 bg-white text-gray-400 inline-block transition-all duration-100 pointer-events-none" htmlFor="username">Username</label>
         </div>
         <div className="input w-48 h-8 mx-auto mb-3">
            <input className="w-full px-2 py-1 text-xs border-2 border-gray-300 focus:border-blue-400 rounded appearance-none outline-none" type="password" name="password" />
            <label className="text-xs px-1 bg-white text-gray-400 inline-block transition-all duration-100 pointer-events-none" htmlFor="paswword">Password</label>
         </div>
         <div className="button w-full flex justify-end">
            <button className="w-12 h-6 text-xs text-white rounded bg-blue-400 hover:bg-blue-500 outline-none">submit</button>
         </div>
      </form>
   )
}

export default Form
