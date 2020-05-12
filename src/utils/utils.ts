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

const formatAsDate = (date: string, time: string): Date => {
   const formatString = `${date}, ${time}`;

   const formatDate = new Date(formatString)

   return formatDate
}

const utils = {
   injectID,
   filterByStatus,
   formatAsDate
}

export default utils;