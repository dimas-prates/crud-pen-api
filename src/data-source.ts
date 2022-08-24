import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
const migrationsDir = `${__dirname}/**/migrations/*.{ts,js}`;
const entitiesDir = `${__dirname}/**/entities/*.{ts,js}`;

export const AppDataSource = new DataSource({
	type: "postgres",
	host: DB_HOST,
	port: Number(DB_PORT),
	username: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_NAME,
	synchronize: true,
	// logging: false,
	entities: [entitiesDir],
	migrations: [migrationsDir],
	// subscribers: [],
});