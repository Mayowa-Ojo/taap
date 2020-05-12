import * as React from 'react'

import useForm from "../../../../hooks/useForm";
import { insertOne } from "../../../../database/taskdb";
import utils from "../../../../utils/utils";
import "./form.scss";

const Form: React.FC<FormProp> = ({ toggleModal }) => {

   const initialValues = {
      task: "",
      comment: "",
      priority: 0 as Priority,
      date: "",
      time: ""
   }
   const persistFormData = (values: FormValues) => {
      console.log(values)
      const data = {
         deet: values.task,
         comment: values.comment,
         status: "in-progress" as Status,
         priority: values.priority,
         createdAt: new Date(),
         due: utils.formatAsDate(values.date, values.time)
      }

      const task: Task = utils.injectID([data])[0]

      insertOne(task)
         .catch(err => console.error(err))
   }
   const {values, handleChange, handleSubmit} = useForm({initialValues, persistFormData})

   React.useEffect(() => {
      // handle keyboard event
      const handler = (e: KeyboardEvent): void => {
         if(e.which == 8) { // close on backspace key
            toggleModal()
         }
      }

      window.addEventListener("keyup", handler)
      return () => {
         window.removeEventListener("keyup", handler)
      }
   }, [])

   return (
      <div className="h-full w-full absolute z-10 bg-gray-700 bg-opacity-50">
         <span onClick={toggleModal} className="close-btn inline-block float-right transform -translate-x-20 translate-y-12 cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1L13 13M1 13L13 1L1 13Z" stroke="#5C737F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </span>

         <form onSubmit={handleSubmit} className="form-wrapper p-6 bg-white shadow-md rounded-lg mx-auto border-t-2 border-indigo-500 border-solid transform -translate-x-8 translate-y-16">
            <span className="float-right">
               <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.85999 7.23155L3.74048 6.97755L9.04196 1.61258C9.08378 1.56973 9.10706 1.51214 9.10678 1.45227C9.1065 1.3924 9.08267 1.33504 9.04046 1.29258L8.72296 0.971581C8.70244 0.950499 8.67793 0.933716 8.65086 0.92221C8.62379 0.910704 8.59469 0.904706 8.56528 0.904566C8.53586 0.904427 8.50671 0.910148 8.47953 0.921396C8.45235 0.932645 8.42768 0.949195 8.40696 0.970081L3.11949 6.32106L2.85949 7.23105L2.85999 7.23155ZM9.35146 0.335584L9.66895 0.657082C10.107 1.10058 10.111 1.81608 9.67696 2.25507L4.21398 7.78405L2.33199 8.32605C2.21709 8.35821 2.09412 8.34347 1.99007 8.28507C1.88602 8.22668 1.80939 8.12938 1.77699 8.01455C1.75288 7.93199 1.75254 7.8443 1.77599 7.76155L2.32349 5.84156L7.77196 0.327084C7.87557 0.222763 7.99891 0.140116 8.13478 0.0839611C8.27066 0.0278067 8.41636 -0.000730452 8.56339 1.42063e-05C8.71041 0.000758865 8.85581 0.0307703 8.99112 0.0882983C9.12642 0.145826 9.24892 0.230219 9.35146 0.335584ZM3.59198 0.912081C3.83998 0.912081 4.04098 1.11558 4.04098 1.36658C4.04138 1.42591 4.03007 1.48474 4.00772 1.5397C3.98536 1.59467 3.95239 1.64468 3.91069 1.68689C3.86899 1.7291 3.81938 1.76268 3.76469 1.78571C3.71001 1.80873 3.65132 1.82075 3.59198 1.82108H1.79599C1.29999 1.82108 0.897996 2.22808 0.897996 2.72957V8.18255C0.897996 8.68455 1.29999 9.09154 1.79599 9.09154H7.18397C7.67996 9.09154 8.08246 8.68455 8.08246 8.18255V6.36506C8.08246 6.11406 8.28346 5.91056 8.53146 5.91056C8.77946 5.91056 8.98046 6.11406 8.98046 6.36556V8.18255C8.98046 9.18654 8.17596 10.0005 7.18397 10.0005H1.79599C0.803996 10.0005 0 9.18654 0 8.18255V2.72957C0 1.72608 0.803996 0.912081 1.79599 0.912081H3.59198Z" fill="#6682E3"/>
               </svg>
            </span>
            <div className="mb-4">
               <label className="block text-gray-700 text-sm mb-2" htmlFor="task">
               Task
               </label>
               <input onChange={handleChange} value={values.task} className="shadow-sm appearance-none border rounded text-xs w-full py-2 px-3 text-gray-700 leading-tight" id="task" name="task" type="text" />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700 text-sm mb-2" htmlFor="comment">
               Comment
               </label>
               <textarea onChange={handleChange} value={values.comment} id="comment" className="shadow-sm appearance-none border rounded w-full h-20 text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="comment"></textarea>
            </div>
            <div className="max-w-sm flex flex-wrap items-center">
               <label className="block text-gray-700 text-sm mb-2 mr-4" htmlFor="comment">
                  Priority
               </label>
               <div className="flex items-center">
               <div className="flex items-center mr-4 ">
                  <input onChange={handleChange} id="radio1" type="radio" value="high" name="priority" className="hidden" />
                  <label htmlFor="radio1" className="block text-gray-700 mb-2 flex items-center cursor-pointer">
                     <span className="w-3 h-3 inline-block mr-1 rounded-full border border-grey"></span>
                     High
                  </label>
               </div>
               <div className="flex items-center mr-4 ">
                  <input onChange={handleChange} id="radio2" type="radio" value="medium" name="priority" className="hidden" />
                  <label htmlFor="radio2" className="block text-gray-700 mb-2 flex items-center cursor-pointer">
                     <span className="w-3 h-3 inline-block mr-1 rounded-full border border-grey"></span>
                     Medium
                  </label>
               </div>
               <div className="flex items-center mr-4 ">
                  <input onChange={handleChange} id="radio3" type="radio" value="low" name="priority" className="hidden" />
                  <label htmlFor="radio3" className="block text-gray-700 mb-2 flex items-center cursor-pointer">
                     <span className="w-3 h-3 inline-block mr-1 rounded-full border border-grey"></span>
                     Low
                  </label>
               </div>
               </div>
            </div>

            <div className="due max-w-sm flex flex-wrap items-center">
               <label className="block text-gray-700 text-sm mb-2 mr-4" htmlFor="comment">
                  Due
               </label>
               <div className="mb-2 mr-4">
                  <input onChange={handleChange} className="shadow-sm appearance-none border rounded py-2 px-2 text-gray-700 leading-tight" id="date" name="date" type="date" />
               </div>
               <div className="mb-2">
                  <input onChange={handleChange} className="shadow-sm appearance-none border rounded py-2 px-1 text-gray-700 leading-tight" id="time" name="time" type="time" />
               </div>
            </div>

            <button className="bg-transparent hover:bg-gray-600 text-gray-700 font-semibold hover:text-white py-1 px-4 border border-indigo-500 hover:border-transparent rounded float-right">
               Add
            </button>
         </form>
      </div>
   )
}

export default Form;
