import { MigrationConfig } from "drizzle-orm/migrator";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

/*
const migrationConfig: MigrationConfig = {
  migrationsFolder: __dirname + "/migrations",
};

const migrationClient = postgres(
  "postgres://postgres:postgres@192.168.178.50:5432/codemuseum-db",
  { max: 1 }
);

migrate(drizzle(migrationClient), migrationConfig);
*/

const queryClient = postgres(
  "postgres://postgres:postgres@192.168.178.50:5432/codemuseum-db"
);
export const db = drizzle(queryClient, { schema });
