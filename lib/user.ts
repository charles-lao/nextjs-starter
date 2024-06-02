import {db} from '@/db';
import {userTable} from '@/db/schema'
import { eq } from 'drizzle-orm';

import { v4 as uuidv4 } from 'uuid';

export interface User {
    id: string;
    userName: string;
    password: string;
    role: string;
}

export async function createUser(userName: string, password: string): Promise<User> {
    const user: User = {
        id: uuidv4(),
        userName,
        password,
        role: "guest"
    };
    await db.insert(userTable).values(user);

    return user; // Return the created user object
}


export function getUserByUserName(userName: string): User | undefined {
    const user = db
        .select()
        .from(userTable)
        .where(eq(userTable.userName, userName))
        .get();

    return user; // Ensure the correct type inference or explicitly cast if needed
}