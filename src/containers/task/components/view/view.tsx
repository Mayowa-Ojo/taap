import * as React from 'react';

import "./view.scss";

const View: React.FC<ViewProp> = ({ toggleModal }) => {

   React.useEffect(() => {
      // handle keyboard event
      const handler = (e: KeyboardEvent): void => {
         if(e.altKey && e.key == "ArrowLeft") { // close on backspace key
            toggleModal()
         }
      }

      window.addEventListener("keydown", handler)
      return () => {
         window.removeEventListener("keydown", handler)
      }
   }, [])

   return (
      <div className="view-wrapper p-6 bg-white shadow-md rounded-lg mx-auto border-t-2 border-indigo-500 border-solid transform -translate-x-8 translate-y-16">
         <p className="text-gray-500">Task</p>
         <p className="text-gray-500">...</p>

         <hr/>

         <p className="text-gray-500">Comment</p>
         <p className="text-gray-500">...</p>

         <hr/>

         <p className="text-gray-500">Priority ... <span>|</span> Due ...</p>
      </div>
   )
}

export default View;
