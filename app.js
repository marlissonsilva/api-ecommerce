import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDatabase from "./src/database/db.js";
import router from "./src/routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

app.use(bodyParser.json());

connectDatabase();

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
