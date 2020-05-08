import * as React from 'react'
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Wrapper: React.FC = (props) => {
   return (
      <div className="flex flex-row w-full h-full" >
         <Sidebar />
         {props.children}
      </div>
   )
}

export default Wrapper;
