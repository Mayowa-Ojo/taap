import * as React from 'react'

import Card from "./components/card/card";
import { insertMany } from "../../database/taskdb";
import "./task.css";

const Task: React.FC = () => {
   const [counter, setCounter] = React.useState(0);

   const handleClick = () => {
      setCounter(counter + 1)
   }

   // React.useEffect(() => {
   //   (async () => {
   //      await insertMany()
   //   })()
   // }, [])
   
   return (
      <div className="wrapper overflow-y-scroll h-full flex flex-row pt-8">
         <div className="flex flex-col items-center py-4 w-1/3 h-full">
            <h4 className="flex items-center text-gray-700">
               <svg className="mr-2" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#FFC13D"/>
               </svg>
               In-progress
            </h4>
            <Card />
            <Card />
            <Card />
         </div>
         <div className="flex flex-col items-center py-4 w-1/3 border-r border-l border-solid border-gray-300 h-full">
            <h4 className="flex items-center text-gray-700">
               <svg className="mr-2" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#45F3D4"/>
               </svg>
               Completed
            </h4>
            <Card />
            <Card />
            <Card />
         </div>
         <div className="flex flex-col items-center py-4 w-1/3 h-full">
            <h4 className="flex items-center text-gray-700">
               <svg className="mr-2" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#ED483D"/>
               </svg>
               Unfulfilled
            </h4>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </div>
   )
}

export default Task;