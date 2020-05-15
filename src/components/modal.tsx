import * as React from 'react';

import "./modal.scss";

const Modal: React.FC<ModalProp> = (props) => {
   return (
      <div className="h-full w-full absolute z-10 bg-gray-700 bg-opacity-50">
         <span onClick={props.toggleModal} className="close-btn inline-block float-right transform -translate-x-20 translate-y-12 cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1L13 13M1 13L13 1L1 13Z" stroke="#5C737F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </span>
         {props.children}
      </div>
   )
}

export default Modal;
