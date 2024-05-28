import { cookies } from 'next/headers';
import { Lucia } from 'lucia';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';

import { db } from '.';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import {adapter} from './schema';

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
});
