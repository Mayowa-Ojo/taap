import Dexie from "dexie";

const db = new Dexie("taap_db")

db.version(1).stores({
   tasks: "id",
   passwords: "id",
   dictionary: "id",
   wishlist: "id"
})

export default db;