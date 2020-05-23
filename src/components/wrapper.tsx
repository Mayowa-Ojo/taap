import * as React from 'react'
import Sidebar from "./sidebar";

const Wrapper: React.FC<WrapperProp> = (props) => {
   return (
      <div className="flex flex-row w-full h-full" >
         <Sidebar currentApp={props.currentApp} setCurrentApp={props.setCurrentApp} />
         {props.children}
      </div>
   )
}

export default Wrapper;
