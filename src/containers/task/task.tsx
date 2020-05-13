import * as React from 'react'

import Card from "./components/card/card";
// import { insertMany } from "../../database/taskdb";
// import { tasks_seed } from "../../database/seed";
import utils from "../../utils/utils";
import "./task.scss";

const Task: React.FC = () => {
   const [cards, setCards] = React.useState<Object>({})
   const [isReloading, setReloading] = React.useState<boolean>(false)
   
   const renderCards = async () => {
      const cards = {}
      const inProgress = await utils.filterByStatus("in-progress" as Status)
      const completed = await utils.filterByStatus("completed" as Status)
      const unfulfilled = await utils.filterByStatus("unfulfilled" as Status)
      
      cards["in-progress"] = inProgress.map((obj, i) => <Card key={i} task={obj} setReloading={setReloading} />)
      cards["completed"] = completed.map((obj, i) => <Card key={i} task={obj} setReloading={setReloading} />)
      cards["unfulfilled"] = unfulfilled.map((obj, i) => <Card key={i} task={obj} setReloading={setReloading} />)

      setCards(cards)
   }

   React.useEffect(() => {

      (async () => {
         await renderCards();

         setTimeout(() => {
            setReloading(false)
         }, 500);
      })();
   
    }, [isReloading]);
   
   return (
      <div className="wrapper overflow-y-scroll h-full flex flex-row pt-8">
         <div className="flex flex-col items-center py-4 w-1/3 h-full">
            <h4 className="flex items-center text-gray-700">
               <svg className="mr-2" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#FFC13D"/>
               </svg>
               In-progress
            </h4>
            {  cards["in-progress"] }
         </div>
         <div className="flex flex-col items-center py-4 w-1/3 border-r border-l border-solid border-gray-300 h-full">
            <h4 className="flex items-center text-gray-700">
               <svg className="mr-2" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#45F3D4"/>
               </svg>
               Completed
            </h4>
            {  cards["completed"] }
         </div>
         <div className="flex flex-col items-center py-4 w-1/3 h-full">
            <h4 className="flex items-center text-gray-700">
               <svg className="mr-2" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#ED483D"/>
               </svg>
               Unfulfilled
            </h4>
            {  cards["unfulfilled"] }
         </div>
      </div>
   )
}

export default Task;