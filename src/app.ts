import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
import './utils/event.handler';

const PORT = process.env.PORT ?? 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

db().then();

app.listen(PORT)
