import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index";
import compression from "compression";
import helmet from "helmet";

const app = express();
// app.disable("x-powered-by");
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(router);

export default app;