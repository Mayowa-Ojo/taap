import * as React from 'react'
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Wrapper(props) {
   return (
      <div className="flex flex-row w-full h-full border-2 border-gray-600 border-solid" >
         <Sidebar />
         {props.children}
      </div>
   )
}
