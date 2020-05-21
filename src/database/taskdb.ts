import db from "./indexdb";
import utils from "../utils/utils";

export async function findOne(id: number): Promise<any> {
   try {
      //...
      const response = await db.table("tasks").where("id").equals(id)

      return response
   } catch (err) {
      console.error(err)
   }
}

export async function findAll(): Promise<Task[]> {
   try {
      //...
      const response = await db.table("tasks").toArray()

      return response
   } catch (err) {
      console.error(err)
   }
}

export async function findMany(query: Status): Promise<void> {
   try {
      //...
   } catch (err) {
      console.error(err)
   }
}

export async function insertOne(data: Task): Promise<void> {
   try {
      await db.table("tasks").put(data)
   } catch(err) {
      console.error(err)
   }
}

export async function insertMany(data: Task[]): Promise<void> {
   const parsedData = utils.injectID<Task>(data)
   try {
      await db.table("tasks").bulkPut(parsedData)
   } catch(err) {
      console.error(err)
   }
}

export async function updateOne(id: string, field: string, update: string): Promise<void> {
   try {
      //...
      await db.table("tasks").update(id, { [field]: update })
      console.log("[x] - field updated...")
   } catch (err) {
      console.error(err)
   }
}

export async function updateMany(): Promise<void> {
   try {
      //...
   } catch (err) {
      console.error(err)
   }
}

export async function updateAll(): Promise<void> {
   try {
      //...
   } catch (err) {
      console.error(err)
   }
}

export async function deleteOne(id: string): Promise<void> {
   try {
      //...
      await db.table("tasks").delete(id)
   } catch (err) {
      console.error(err)
   }
}

export async function deleteMany(): Promise<void> {
   try {
      //...
   } catch (err) {
      console.error(err)
   }
}

export async function deleteAll(): Promise<void> {
   try {
      //...
   } catch (err) {
      console.error(err)
   }
}
