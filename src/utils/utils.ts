// utility functions

import { v4 as uuidv4 } from "uuid";
import { 
   differenceInDays,
   differenceInHours,
   differenceInMonths,
   differenceInMinutes,
   differenceInYears,
} from "date-fns";

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

const calculateTimeDifference = (left: Date, right: Date): string => {
   let diff: number;

   diff = differenceInMinutes(right, left);
   if(diff < 59) {
      return `in ${diff} min(s)`
   }

   diff = differenceInHours(right, left);
   if(diff < 24) {
      return `in ${diff} hour(s)`
   }

   diff = differenceInDays(right, left);
   if(diff < 30) {
      return `in ${diff} day(s)`
   }

   diff = differenceInMonths(right, left);
   if(diff < 12) {
      return `in ${diff} month(s)`
   }

   diff = differenceInYears(right, left);
   return `in ${diff} year(s)`;
}

const utils = {
   injectID,
   filterByStatus,
   formatAsDate,
   calculateTimeDifference
}

export default utils;