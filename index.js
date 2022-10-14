import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/router.js";
import http from "http";
import https from "https";
import fs from "fs";

const key = fs.readFileSync("./certs/ssl.key", "utf-8");
const cert = fs.readFileSync("./certs/ssl.crt", "utf-8");

const credentials = {
    key,
    cert
};

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const HTTP_PORT = 3000;
const HTTPS_PORT = 443;

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);

httpServer.listen(HTTP_PORT, () => console.log(`Server started at port ${HTTP_PORT}`));
httpsServer.listen(HTTPS_PORT, () => console.log(`Server started at port ${HTTPS_PORT}`));
