import db from "./indexdb";
import utils from "../utils/utils";

export async function findOne(id: string): Promise<Account> {
   try {
      //...
      let response: Task;
      await db.table("passwords").where("id").equals(id).each(obj => {
         response = obj
      })

      return response as unknown as Account
   } catch (err) {
      console.error(err)
   }
}

export async function insertOne(): Promise<void> {
   try {
      // ...
   } catch(err) {
      console.error(err)
   }
}