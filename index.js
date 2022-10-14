import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/router.js";
import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

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

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./client")));

app.get("/dashboard", (req, res) => res.sendFile(path.join(__dirname, "./client", "index.html")));

app.get("/dashboard/tasks", (req, res) => res.sendFile(path.join(__dirname, "./client", "index.html")));

app.get("/dashboard/assign", (req, res) => res.sendFile(path.join(__dirname, "./client", "index.html")));

app.use(router);

const HTTP_PORT = 3000;
const HTTPS_PORT = 443;

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);

httpServer.listen(HTTP_PORT, () => console.log(`Server started at port ${HTTP_PORT}`));
httpsServer.listen(HTTPS_PORT, () => console.log(`Server started at port ${HTTPS_PORT}`));
