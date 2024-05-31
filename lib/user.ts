import {db} from '@/db';
import {userTable} from '@/db/schema'
import { eq } from 'drizzle-orm';

import { v4 as uuidv4 } from 'uuid';
 // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// export function createUser(userName, password) {
//     const result = db
//     .prepare('INSERT INTO users (username, password) VALUES (?, ?)')
//     .run(userName, password);
//     return result.lastInsertRowid;
// }

export async function createUser(userName:string, password:string) {
    await db.insert(userTable).values({ id: uuidv4(), userName, password, role: "guest" });
}


export function getUserByUserName(userName:string) {
    //return db.prepare('SELECT * FROM users WHERE username = ?').get(userName);
    return db
    .select()
    .from(userTable)
    .where(eq(userTable.userName, userName));
}