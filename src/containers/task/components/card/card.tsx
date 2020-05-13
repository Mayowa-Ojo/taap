import * as React from 'react'

import Toast from "../toast/toast";
import { deleteOne } from "~database/taskdb";
import "./card.scss";

const Card: React.FC<CardProp> = ({ task, setReloading }) => {
   const [isOpen, setIsOpen] = React.useState<boolean>(false)

   const handleMenuOpen = () => {
      setIsOpen(!isOpen)
   }

   const handleEditTask = () => {
      console.log("undefined handler...")
   }

   const handleViewTask = () => {
      console.log("undefined handler...")
   }

   const handlePinTask = () => {
      console.log("undefined handler...")
   }

   const handleTaskStatus = () => {
      console.log("undefined handler...")
   }

   const handleDeleteTask = (id: string) => {
      deleteOne(id)
         .then(_ => {
            console.log("task deleted")
            handleMenuOpen()
            setReloading(true)
         })
         .catch(err => console.error(err))
   }

   type DispatchToastAction = (action: string) => (id: string) => void
   const dispatchToastAction: DispatchToastAction = (action) => {
      switch (action) {
         case "Edit Task":
            console.log("opening editor")
            return handleEditTask;
         case "Pin Task":
            console.log("opening editor")
            return handlePinTask;
         case "Mark as Complete":
            console.log("opening editor")
            return handleTaskStatus;
         case "Mark as Unfulfilled":
            console.log("opening editor")
            return handleTaskStatus
         case "View Task":
            console.log("opening editor")
            return handleViewTask;
         case "Delete Task":
            return handleDeleteTask
         default:
            console.error("invalid action")
            break;
      }
   }

   return (
      <div className="card h-12 w-48 flex bg-white flex-row my-4 pb-1 shadow cursor-pointer">
         <div className="flex flex-col items-center justify-center w-1/12">
            <svg className="" width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect opacity="0.5" width="2" height="25" rx="1" fill="#FFC13D"/>
            </svg>
         </div>
         <div className="w-11/12 flex flex-col">
            <div className="layer flex justify-between pt-3 px-1">
               <p className="truncate text-gray-800">{ task.deet }</p>
               <svg onClick={handleMenuOpen} className="transform -translate-x-1 -translate-y-1 cursor-pointer" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.14286 0L4 2.85714L6.85714 0L8 0.571429L4 4.57143L0 0.571429L1.14286 0Z" fill="#6682E3"/>
               </svg>
               <Toast dispatchToastAction={dispatchToastAction} isOpen={isOpen} handleMenuOpen={handleMenuOpen} />
            </div>
            <div className="flex justify-between layer pt-1 pl-1 pr-2">
               <li>
                  <svg className="transform translate-y-1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.8 8C2.69391 8 2.59217 7.95786 2.51716 7.88284C2.44214 7.80783 2.4 7.70609 2.4 7.6V6.4H0.8C0.587827 6.4 0.384344 6.31571 0.234315 6.16569C0.0842854 6.01566 0 5.81217 0 5.6V0.8C0 0.587827 0.0842854 0.384344 0.234315 0.234315C0.384344 0.0842854 0.587827 0 0.8 0H7.2C7.41217 0 7.61566 0.0842854 7.76569 0.234315C7.91571 0.384344 8 0.587827 8 0.8V5.6C8 5.81217 7.91571 6.01566 7.76569 6.16569C7.61566 6.31571 7.41217 6.4 7.2 6.4H4.76L3.28 7.884C3.2 7.96 3.1 8 3 8H2.8ZM3.2 5.6V6.832L4.432 5.6H7.2V0.8H0.8V5.6H3.2ZM6 3.6H5.2V2.8H6V3.6ZM4.4 3.6H3.6V2.8H4.4V3.6ZM2.8 3.6H2V2.8H2.8V3.6Z" fill="#6682E3"/>
                  </svg>
               </li>
               <li className="text-indigo-600">priority: high</li>
               <li className="text-indigo-600">Due: today</li>
               <li>
                  <svg className="transform translate-y-1" width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.27206 2.29376L5.02272 1.04441C4.89168 0.912918 4.71558 0.836111 4.53006 0.829532C4.34454 0.822952 4.16344 0.88709 4.02342 1.00897C3.88339 1.13085 3.79489 1.30137 3.77582 1.48603C3.75675 1.67068 3.80854 1.85569 3.92071 2.00361L3.91945 2.00185L3.86162 2.06697L2.71058 2.57259L2.20848 2.3013C2.15375 2.2716 2.09072 2.26084 2.02923 2.27071C1.96774 2.28058 1.91124 2.31052 1.86855 2.35586V2.35611L1.37877 2.87481C1.32789 2.92813 1.29999 2.99929 1.30107 3.07298C1.30216 3.14667 1.33213 3.21699 1.38455 3.2688L2.58286 4.4671L0.829651 6.22031V6.48708H1.09642L2.84962 4.73387L4.0424 5.92664C4.09396 5.97866 4.16376 6.00854 4.23698 6.00995C4.31021 6.01136 4.38111 5.98418 4.43463 5.93419L4.43438 5.93444L4.95785 5.44968C5.00434 5.40684 5.0351 5.34961 5.04517 5.28719C5.05525 5.22477 5.04407 5.16078 5.01341 5.10548L5.01417 5.10699L4.73911 4.60187L5.23568 3.53506L5.337 3.41337C5.4873 3.51749 5.67111 3.56163 5.8523 3.53712C6.03349 3.5126 6.19896 3.4212 6.31618 3.28088C6.4334 3.14056 6.4939 2.96147 6.48578 2.77881C6.47767 2.59615 6.40152 2.42313 6.27232 2.29376H6.27206ZM6.0053 3.06237C5.94093 3.12674 5.85218 3.16646 5.75412 3.16646C5.65606 3.16646 5.56731 3.12674 5.50294 3.06237L5.30407 2.86324L4.9141 3.3309L4.31646 4.61469L4.64759 5.22239L4.2443 5.59551L1.71518 3.06665L2.09232 2.66713L2.69298 2.99172L4.08816 2.37874L4.43211 1.99154L4.25335 1.81278C4.22038 1.77981 4.19423 1.74067 4.17638 1.69759C4.15854 1.65452 4.14936 1.60835 4.14936 1.56172C4.14936 1.5151 4.15854 1.46893 4.17638 1.42586C4.19423 1.38278 4.22038 1.34364 4.25335 1.31067C4.28632 1.27771 4.32545 1.25155 4.36853 1.23371C4.41161 1.21587 4.45777 1.20669 4.5044 1.20669C4.55102 1.20669 4.59719 1.21587 4.64027 1.23371C4.68334 1.25155 4.72248 1.27771 4.75545 1.31067L6.0048 2.56002C6.06916 2.62439 6.10889 2.71314 6.10889 2.8112C6.10889 2.90925 6.06916 2.99801 6.0048 3.06237H6.0053Z" fill="#6682E3"/>
                  </svg>
               </li>
            </div>
         </div>
         <input className="hidden" type="hidden" name="_id" value={task.id} />
      </div>
   )
}

export default Card;
