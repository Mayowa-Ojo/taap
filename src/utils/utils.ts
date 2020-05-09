// utility functions

import { v1 as uuidv1 } from "uuid";

import { findAll } from "../database/taskdb";

const injectID = <T>(data: T[]): T[] => {
   return data.map<T>(obj => {
      const newObj = {...obj, id: uuidv1()}
      return newObj
   })

}

const filterByStatus = async (status: Status): Promise<Task[]> => {
   const tasks = await findAll();

   const result = tasks.filter(task => task.status == status)

   return result;
}

const utils = {
   injectID,
   filterByStatus
}

export default utils;