import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  out: './db/migration',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'sqlite:./sqlite.db', // Specify the path to the SQLite database file
  },
});