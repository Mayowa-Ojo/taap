import * as React from 'react';

import utils from "~utils/utils";
import "./view.scss";

const View: React.FC<ViewProp> = ({ toggleModal, data }) => {
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
         <p className="text-gray-500 text-xs">{ data.deet }</p>

         <hr className="my-4" />

         <p className="text-gray-500">Comment</p>
         <p className="text-gray-500 text-xs">{ data.comment }</p>

         <hr className="my-4"/>

         <p className="text-gray-500 text-xs">Priority: { data.priority } <span ><span className="mx-2">|</span> </span> Due { utils.calculateTimeDifference(data.createdAt, data.due) }</p>
      </div>
   )
}

export default View;
