import app from "./app";
import Database from "./data-source";

const appPort = process.env.PORT || 3000;
const processId = process.pid;

const server = app.listen(appPort, () => {
	console.log(`\nApplication environment: ${process.env.NODE_ENV}`);
	console.log(`Application PORT: ${appPort}`);
	console.log(`Application node version: ${process.versions.node}`);
	console.log(`Application process(PID): ${processId}`);
});

Database.initialize().then((connection) => {
	const { type, database } = connection.options;
	console.log(`Database ${database} (${type}): ${connection.isInitialized ? "connected" : "disconnect"}\n`);
}).catch((error) => { console.log(error); });
function gracefulShutdown(event: string) {
	return () => {
		server.close(async () => {
			await Database.destroy();
			console.log(`\nApplication uptime: ${Math.floor(process.uptime())} seconds`);
			console.log(`Application signal received: ${event}`);
			console.log(`Application process(PID): ${processId} terminated`);
			console.log(`Database status: ${Database.isInitialized ? "connected" : "disconnect"}\n`);
			process.exit(0);
		});
	};
}

process.on("SIGTERM", gracefulShutdown("SIGTERM"));
process.on("SIGINT", gracefulShutdown("SIGINT"));

process.on("uncaughtException", (error, origin) => {
	console.log(`${origin}\n${error}`);
	process.exit(1);
});
process.on("unhandledRejection", (reason) => {
	console.log(`unhandledRejection: ${reason}`);
	process.exit(1);
});