import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { db } from ".";

//from drizzle-sqlite yt tutorial
export const person = sqliteTable("Person", {
    id:integer("id"),
    userName:text("userName"),
    userCountry:text("userCountry")
})



//from lucia docs
const userTable = sqliteTable("user", {
    id: text("id").notNull().primaryKey()
});
  
const sessionTable = sqliteTable("session", {
    id: text("id").notNull().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => userTable.id),
    expiresAt: integer("expires_at").notNull()
});

export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);