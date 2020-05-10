// import type { Priority } from "./taskdb";
declare enum Status {
   inProgress = "in-progress",
   completed = "completed",
   unfilfilled = "unfilfilled"
}

declare enum Priority {
   low,
   medium,
   high
}

type uuid = string

declare interface Task {
   id: uuid
   deet: string
   status: Status
   createdAt: Date
   priority: Priority
   due: Date
}

declare interface Options {
   database: string
   dbStore: string
   version: number
}
