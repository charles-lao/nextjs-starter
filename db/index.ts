import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';

//from drizzle-sqlite yt tutorial
const sqlite = new Database('sqlite.db');
export const db:BetterSQLite3Database = drizzle(sqlite);

//const result = await db.select().from(users);




  
