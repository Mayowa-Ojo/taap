// import type { Priority } from "./taskdb";
declare enum Status {
   inProgress = "in-progress",
   completed = "completed",
   unfilfilled = "unfilfilled"
}

declare enum Priority {
   low = "low",
   medium = "medium",
   high = "high"
}

type uuid = string

declare interface Task {
   id?: uuid
   deet: string,
   comment?: string
   status: Status
   createdAt: Date
   priority: Priority
   due: Date
   pinned: boolean
}

declare interface Options {
   database: string
   dbStore: string
   version: number
}
