import app from "./app";
import { AppDataSource } from "./data-source";

const appPort = process.env.PORT || 3000;
const server = app.listen(appPort, () => { console.log(`\nServer's running on port ${appPort}\n`); });

AppDataSource.initialize().then((connection) => {
	const { type, database } = connection.options;
	console.log(`Database connection "${type}-> ${database}": ${connection.isInitialized}\n`);
}).catch((error) => { console.log(error); });

process.on("SIGINT", () => {
	server.close();
	console.log("\nSever has been terminated\n");
	AppDataSource.destroy().then(() => {
		console.log("Database connection lost\n");
	}).catch((error) => { console.log(error); });
});