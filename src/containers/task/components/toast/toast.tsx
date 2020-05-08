import * as React from 'react'
import useClickAway from "../../../../hooks/useClickAway";

import "./toast.css";

const Toast: React.FC<ToastProp> = (props) => {

   const handleClick = () => {
      props.handleMenuOpen()
   }

   const ref = useClickAway({isOpen: props.isOpen, setOpen: props.handleMenuOpen})

   return (
      <div ref={ref} className={`toast ${props.isOpen ? "visible" : "invisible"} w-24 h-32 bg-white z-10 fixed shadow-md border border-gray-300 border-solid`}>
         <div className="h-4">
            <svg onClick={handleClick} className="cursor-pointer transform -translate-x-1 translate-y-1 float-right" width="10" height="10" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M3 0C1.34582 0 0 1.34582 0 3C0 4.65418 1.34582 6 3 6C4.65418 6 6 4.65418 6 3C6 1.34582 4.65418 0 3 0ZM4.0862 3.75995C4.10853 3.78117 4.12639 3.80664 4.13872 3.83487C4.15105 3.86309 4.15761 3.8935 4.15801 3.9243C4.1584 3.9551 4.15262 3.98567 4.14102 4.0142C4.12941 4.04273 4.11221 4.06865 4.09043 4.09043C4.06865 4.11221 4.04273 4.12941 4.0142 4.14102C3.98567 4.15262 3.9551 4.1584 3.9243 4.15801C3.8935 4.15761 3.86309 4.15105 3.83487 4.13872C3.80664 4.12639 3.78117 4.10853 3.75995 4.0862L3 3.32639L2.24005 4.0862C2.19642 4.12765 2.13832 4.15042 2.07815 4.14965C2.01797 4.14888 1.96048 4.12463 1.91792 4.08208C1.87537 4.03952 1.85112 3.98203 1.85035 3.92185C1.84958 3.86168 1.87235 3.80358 1.9138 3.75995L2.67361 3L1.9138 2.24005C1.87235 2.19642 1.84958 2.13832 1.85035 2.07815C1.85112 2.01797 1.87537 1.96048 1.91792 1.91792C1.96048 1.87537 2.01797 1.85112 2.07815 1.85035C2.13832 1.84958 2.19642 1.87235 2.24005 1.9138L3 2.67361L3.75995 1.9138C3.80358 1.87235 3.86168 1.84958 3.92185 1.85035C3.98203 1.85112 4.03952 1.87537 4.08208 1.91792C4.12463 1.96048 4.14888 2.01797 4.14965 2.07815C4.15042 2.13832 4.12765 2.19642 4.0862 2.24005L3.32639 3L4.0862 3.75995Z" fill="#5C737F"/>
            </svg>
         </div>
         <ul>
            <li className="text-gray-600 pl-2 border-b border-gray-200 border-solid hover:bg-gray-300 cursor-pointer">View Task</li>
            <li className="text-gray-600 pl-2 border-b border-gray-200 border-solid hover:bg-gray-300 cursor-pointer">Edit Task</li>
            <li className="text-gray-600 pl-2 border-b border-gray-200 border-solid hover:bg-gray-300 cursor-pointer">Mark as complete</li>
            <li className="text-gray-600 pl-2 border-b border-gray-200 border-solid hover:bg-gray-300 cursor-pointer">Mark as unfulfilled</li>
            <li className="text-gray-600 pl-2 border-b border-gray-200 border-solid hover:bg-gray-300 cursor-pointer">Pin Task</li>
            <li className="text-gray-600 pl-2 hover:bg-gray-300 cursor-pointer">Delete Task</li>
         </ul>
      </div>
   )
}

export default Toast;
