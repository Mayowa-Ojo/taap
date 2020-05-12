// utility functions

import { v4 as uuidv4 } from "uuid";

import { findAll } from "../database/taskdb";

const injectID = <T>(data: T[]): T[] => {
   return data.map<T>(obj => {
      const newObj = {...obj, id: uuidv4()}
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